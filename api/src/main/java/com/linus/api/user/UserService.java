package com.linus.api.user;

import com.linus.api.enums.Messenger;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

@Service
public interface UserService {
  String addUsers();
  String login(User user);
  String updatePassword(User user);
  List<?> findUsersByName(String name);
  Map<String, ?> findUsersByNameFromMap(String name);
  List<?> findUsersByJob(String job);
  Map<String, ?> findUsersByJobFromMap(String job);
  Map<String, ?> getUserMap();
  String findUsernameInDB();

  List<?> findUsers() throws SQLException;
  Messenger touchTable() throws SQLException;

  void removeTable();
}
