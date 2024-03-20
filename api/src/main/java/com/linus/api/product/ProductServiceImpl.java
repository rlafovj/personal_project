package com.linus.api.product;

public class ProductServiceImpl implements ProductService {
    private static ProductService instance = new ProductServiceImpl();

    private ProductServiceImpl(){}

    public static ProductService getInstance(){
        return instance;
    }

}
