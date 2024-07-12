package com.codingrecipe.ajaxEx.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@AllArgsConstructor
public class AjaxDTO {
    protected String param1;
    protected String param2;
    // 원래는 private 던데 저러면 안돌아가서 임의로 바꿈
    
}
