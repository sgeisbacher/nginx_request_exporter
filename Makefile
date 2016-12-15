build:
	GOOS=linux GOARCH=amd64 go build

try: build
	cp nginx_request_exporter example/nginx-request-exporter/nginx_request_exporter
	cd example
	docker-compose -f example/docker-compose.yml up --build

publish: build
	docker build -t sgeisbacher/nginx-request-exporter .
	docker push sgeisbacher/nginx-request-exporter
