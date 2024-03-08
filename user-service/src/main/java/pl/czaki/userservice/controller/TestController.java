package pl.czaki.userservice.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.czaki.userservice.model.User;
import pl.czaki.userservice.service.TestService;

@RestController
@CrossOrigin
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

    @GetMapping(value = "/user-info")
    public User getUserInfo(@RequestParam String login) {
        return service.getUserInfo(login);
    }

    @PostMapping(value = "/user-add")
    public ResponseEntity<String> getAddUser(@RequestBody User user) {
        return service.addUser(user);
    }
}
