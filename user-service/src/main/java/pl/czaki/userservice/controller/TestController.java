package pl.czaki.userservice.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.czaki.userservice.service.TestService;

@RestController
public class TestController {

    private final TestService service;

    public TestController(TestService service) {
        this.service = service;
    }

    @GetMapping(value = "/")
    public String test() {
        return "OK user-service";
    }

    @GetMapping(value = "/message-test")
    public ResponseEntity<String> getTestMessageFromAuthService() {
        return service.getTestMessageFromAuthService();
    }
}
