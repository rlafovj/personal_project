package com.linus.api.crawler;

import java.io.IOException;
import java.util.Map;

public interface CrawlerService {
  Map<String, ?> findNamesFromWeb( Map<String, String> paramMap) throws IOException ;
  Map<String, ?> findMelonChartFromWeb(Map<String, String> paramMap2) throws IOException;
}