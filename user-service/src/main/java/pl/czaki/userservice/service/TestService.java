package pl.czaki.userservice.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.client.RestTemplate;
import pl.czaki.userservice.model.User;
import pl.czaki.userservice.repository.TestRepository;


@Service
public class TestService {

    @Value("${auth.service.path}")
    private String authServicePath;

    private final TestRepository testRepository;

    public TestService(TestRepository testRepository) {
        this.testRepository = testRepository;
    }

    public ResponseEntity<String> getTestMessageFromAuthService() {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForEntity(authServicePath, String.class);
    }

    public User getUserInfo(String login) {
        return testRepository.findByLogin(login);
    }
    @Transactional
    public ResponseEntity<String> addUser(User user) {
        testRepository.save(user);
        return new ResponseEntity<>("User added to database", HttpStatus.OK);
    }
}
