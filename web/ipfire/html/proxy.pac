function FindProxyForURL(url, host)
{
if (
     (isPlainHostName(host)) ||
     (isInNet(host, "127.0.0.1", "255.0.0.0")) ||
     (isInNet(host, "192.168.10.0", "255.255.255.0")) ||
     (isInNet(host, "169.254.0.0", "255.255.0.0"))
   )
     return "DIRECT";

 else

if (
     (isInNet(myIpAddress(), "192.168.10.0", "255.255.255.0")) ||
     (isInNet(myIpAddress(), "192.168.11.0", "24"))
   )
     return "PROXY 192.168.10.254:8080";
}
