package com.metallica.metallicaapigateway;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;

@EnableZuulProxy
@EnableEurekaClient
@EnableDiscoveryClient
@SpringBootApplication
public class MetallicaApiGatewayApplication {

	public static void main(String[] args) {
		SpringApplication.run(MetallicaApiGatewayApplication.class, args);
	}
}
