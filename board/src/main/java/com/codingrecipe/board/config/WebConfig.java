package com.codingrecipe.board.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
    private String resoucePath = "/upload/**";
    private String savePath = "C:/Users/user/Desktop/coding_recipe_selfstudy/board/assets/"; // 실제 파일 저장 경로

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler(resoucePath).addResourceLocations(savePath);
    }
}
