: <<'COMMENT'

# =============================================================================
# RECONNAISSANCE & SUBDOMAIN ENUMERATION NOTES
# =============================================================================

## 1. Certificate Transparency (crt.sh)

Tool:
    crt.sh - Certificate Search

Usage:
    - Search domains, organizations, certificate fingerprints
      (SHA-1 / SHA-256), or crt.sh IDs.
    - Wildcard query example:
          %wise.com

Purpose:
    Find subdomains from SSL/TLS certificates logged in public
    Certificate Transparency (CT) logs.

# =============================================================================

## 2. Subdomain Enumeration Tools

### Subfinder

Installation:
    sudo apt install subfinder

Usage:
    subfinder -d wise.com -t 20

Options:
    -d    Target domain
    -t    Number of threads

-------------------------------------------------------------------------------

### Sublist3r

Installation:
    apt install sublist3r

Usage:
    sublist3r -d wise.com

Options:

    +----------------+----------------------------------------------+
    | Flag           | Description                                  |
    +----------------+----------------------------------------------+
    | -h             | Help                                         |
    | -d DOMAIN      | Target domain                                |
    | -b             | Enable subbrute bruteforce                   |
    | -p PORTS       | Scan found subdomains on specified ports     |
    | -v             | Verbose output                               |
    | -t THREADS     | Thread count for subbrute                    |
    | -o OUTPUT      | Output file                                  |
    | -n             | No color output                              |
    +----------------+----------------------------------------------+

Sources:
    - Baidu
    - Yahoo
    - Google
    - Bing
    - Ask
    - Netcraft
    - DNSdumpster
    - VirusTotal
    - ThreatCrowd
    - SSL Certificates
    - PassiveDNS

# =============================================================================

## 3. HTTP Probing

Tool:
    httpprobe (tomnomnom)

Purpose:
    - Filters live hosts from discovered subdomains
    - Returns working HTTP/HTTPS endpoints

Repository:
    github.com/tomnomnom/httpprobe

# =============================================================================

## 4. Technology Stack Detection

### BuiltWith

Website:
    https://builtwith.com

Purpose:
    - Identify technologies used by websites
    - Search by domain, technology, or keyword

-------------------------------------------------------------------------------

### Wappalyzer

Purpose:
    - Detect frameworks
    - Detect analytics platforms
    - Detect CDNs
    - Detect JavaScript libraries

-------------------------------------------------------------------------------

### WhatWeb

Usage:
    whatweb https://wise.com/

Purpose:
    Command-line web technology fingerprinting tool.

# =============================================================================

## 5. Target Scope Example (wise.com)

Reward Structure:

    +----------+------------------+
    | Severity | Reward Range     |
    +----------+------------------+
    | P4       | $100  - $150     |
    | P3       | $300  - $500     |
    | P2       | $1000 - $1500    |
    | P1       | $3000 - $4000    |
    | P0/P6    | $6000            |
    +----------+------------------+

In-Scope Targets:

    - transferwise.com
    - *.wise.com
    - Website and eligible subdomains

Identified Technologies:

    - Java
    - Cloudflare CDN
    - ReactJS
    - Objective-C
    - SwiftUI
    - Swift

# =============================================================================
# COMMAND REFERENCE
# =============================================================================

## crt.sh Lookup

curl -s "https://crt.sh/?q=%.wise.com&output=json" \
| jq -r '.[].name_value' \
| sort -u

-------------------------------------------------------------------------------

## Subfinder

subfinder -d wise.com -silent

-------------------------------------------------------------------------------

## Sublist3r

sublist3r -d wise.com -b -o subs.txt

-------------------------------------------------------------------------------

## httpprobe

cat subs.txt | httpprobe | grep -v "000"

-------------------------------------------------------------------------------

## WhatWeb

whatweb https://wise.com --quiet

-------------------------------------------------------------------------------

## Combined Recon

subfinder -d wise.com -silent | httpx -status-code -title

-------------------------------------------------------------------------------

## Port Scan Live Hosts

cat live_hosts.txt \
| cut -d' ' -f1 \
| httpx -ports 80,443,8080,8443

# =============================================================================

COMMENT