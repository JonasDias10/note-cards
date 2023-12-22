package com.notecards.core;

import org.springframework.stereotype.Component;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

@Component
public class PasswordEncryption {

    private final MessageDigest algorithm;

    public PasswordEncryption() throws NoSuchAlgorithmException {
        algorithm = MessageDigest.getInstance("MD5");
    }

    public String encrypt(String password) {
        StringBuilder hexString = new StringBuilder();
        byte[] messageDigest = algorithm.digest(password.getBytes(StandardCharsets.UTF_8));
        for (byte b : messageDigest) {
            hexString.append(String.format("%02X", 0xFF & b));
        }

        return hexString.toString();
    }

    public boolean equals(String savedPassword, String password) {
        String passwordEncrypt = encrypt(password);
        return passwordEncrypt.equals(savedPassword);
    }

}
