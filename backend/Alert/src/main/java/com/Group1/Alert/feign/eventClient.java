package com.Group1.Alert.feign;

import com.Group1.Alert.dto.eventModel;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name="event", url="http://localhost:9992/event")
public interface eventClient {
    @GetMapping("/getEvent/{eventId}")
    public eventModel getEvent(@PathVariable String eventId);
}