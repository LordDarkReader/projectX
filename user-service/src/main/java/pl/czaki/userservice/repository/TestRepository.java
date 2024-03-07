package pl.czaki.userservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.czaki.userservice.model.User;

@Repository
public interface TestRepository extends JpaRepository<User, Integer> {
    User findByLogin(String login);
}
