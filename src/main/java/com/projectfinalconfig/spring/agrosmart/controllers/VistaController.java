package com.projectfinalconfig.spring.agrosmart.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class VistaController {
    
     @GetMapping("/dashboard")
    public String mostrarDashboard() {
        return "dashboard/dashboard"; // sin .html
    }

    @GetMapping("/login")
    public String mostrarIndex() {
        return "public/index"; // se refiere a templates/index.html
    }

}
