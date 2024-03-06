package pl.czaki.userservice.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;


@Service
public class TestService {

    @Value("${auth.service.path}")
    private String authServicePath;

    public ResponseEntity<String> getTestMessageFromAuthService() {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForEntity(authServicePath, String.class);
    }
}
