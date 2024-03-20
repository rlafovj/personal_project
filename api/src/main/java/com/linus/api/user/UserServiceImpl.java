package com.linus.api.user;

import com.linus.api.enums.Messenger;
import lombok.RequiredArgsConstructor;

import java.sql.SQLException;
import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
  private final UserRepository repository;

  @Override
  public String addUsers() {
    return null;
  }

  @Override
  public String login(User user) {
    return null;
  }

  @Override
  public String updatePassword(User user) {
    return null;
  }

  @Override
  public List<?> findUsersByName(String name) {
    return null;
  }

  @Override
  public Map<String, ?> findUsersByNameFromMap(String name) {
    return null;
  }

  @Override
  public List<?> findUsersByJob(String job) {
    return null;
  }

  @Override
  public Map<String, ?> findUsersByJobFromMap(String job) {
    return null;
  }

  @Override
  public Map<String, ?> getUserMap() {
    return null;
  }

  @Override
  public String findUsernameInDB() {
    return null;
  }

  @Override
  public List<?> findUsers() throws SQLException {
    return null;
  }

  @Override
  public Messenger touchTable() throws SQLException {
    return null;
  }

  @Override
  public void removeTable() {

  }
}
