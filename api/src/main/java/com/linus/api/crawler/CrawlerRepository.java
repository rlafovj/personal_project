package com.linus.api.crawler;

import com.linus.api.common.AbstractRepository;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import java.io.IOException;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

public class CrawlerRepository extends AbstractRepository {
  private static CrawlerRepository instance = new CrawlerRepository();
  private Map<String, ?> map;
  private CrawlerRepository(){
    map = new HashMap<>();
  }
  public static CrawlerRepository getInstance(){return instance;}

  @Override
  public Map<String, ?> save(Map<String, ?> paramMap) throws IOException {
    Map<String, Iterator<Element>> chart = new HashMap<>();

    Document doc = Jsoup.connect("https://music.bugs.co.kr/chart").timeout(10*1000).get();
    Elements elems = doc.select("table.byChart");
    Iterator<Element> title = elems.select("p.title").iterator();
    Iterator<Element> artist = elems.select("p.artist").iterator();
    Iterator<Element> rank = elems.select("strong").iterator();
    chart.put("Title", title);
    chart.put("Artist", artist);
    chart.put("Rank", rank);

    map = chart;
    return map;
  }

  public Map<String,?> save2(Map<String, ?> paramMap2) throws IOException {
    Map<String, Iterator<Element>> chart = new HashMap<>();

    Document doc = Jsoup.connect("https://www.melon.com/chart/index.htm").timeout(10*1000).get();
    Elements elems = doc.select("tbody");
    Iterator<Element> title = elems.select("div.ellipsis.rank01 > span").iterator();
    Iterator<Element> artist = elems.select("div.ellipsis.rank02 span").iterator();
    Iterator<Element> rank = elems.select("td span.rank").iterator();
    chart.put("Title", title);
    chart.put("Artist", artist);
    chart.put("Rank", rank);

    map = chart;
    return map;
  }
}