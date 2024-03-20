package com.linus.api.user;

import com.linus.api.enums.Messenger;
import lombok.Builder;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.sql.SQLException;
import java.util.*;

@CrossOrigin(origins = "http://localhost:3000")
@RequiredArgsConstructor
@RestController
public class UserController {
  private final UserService service;

  @PostMapping("/login")
  public Map<String, ?> login(@RequestBody Map<String, ?> fmap){
    String username = (String)fmap.get("username");
    String password = (String)fmap.get("password");
    System.out.println("ID는 "+username);
    Map<String, String> unMap= new HashMap<>();
    unMap.put("username", username);
    unMap.put("password", password);
    return unMap;
  }

  public Map<String, ?> save(@RequestBody Map<String, ?> map) {

    return map;
  }

  public Map<String, ?> findAll() {
    return null;
  }

  public Map<String, ?> findById(@RequestBody Map<String, ?> map) {
    return map;
  }

  public Map<String, ?> updatePassword(@RequestBody Map<String, ?> map) {
    return map;
  }

  public Map<String, ?> delete(@RequestBody Map<String, ?> map) {
    return map;
  }

  public Map<String, ?> existsById(@RequestBody Map<String, ?> map) {
    return map;
  }

  public Map<String, ?> findUsersByName(@RequestBody Map<String, ?> map) {
    return map;
  }

  public Map<String, ?> findUsersByNameFromMap(@RequestBody Map<String, ?> map) {
    return map;
  }

  public Map<String, ?> findUsersByJob(@RequestBody Map<String, ?> map) {
    return map;
  }

  public Map<String, ?> findUsersByJobFromMap(@RequestBody Map<String, ?> map) {
    return map;
  }

  public Map<String, ?> count() {
    return null;
  }
  public Map<String, ?> getOne(@RequestBody Map<String, ?> map) {
    return map;
  }
  public Map<String, ?> getUserMap(){
    return service.getUserMap();
  }

  public String findUsernameInDB() {
    return service.findUsernameInDB();
  }

  public List<?> findUsers() throws SQLException {
    return service.findUsers();
  }

  public Messenger touchTable() throws SQLException {
    return service.touchTable();
  }

  public void removeTable() {
    service.removeTable();
  }
}
