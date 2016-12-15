FROM debian
RUN apt-get update && apt-get install -y net-tools
ADD nginx_request_exporter /
ENTRYPOINT ["/nginx_request_exporter", "--nginx.syslog-address=0.0.0.0:9514"]
