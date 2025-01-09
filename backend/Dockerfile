FROM eclipse-temurin:17
WORKDIR /app

COPY target/backend-0.0.1-SNAPSHOT.jar /app/app.jar

ENTRYPOINT ["java", "-jar", "/app/app.jar"]

# FROM openjdk:17-jdk-slim
# WORKDIR /app

# COPY target/backend-0.0.1-SNAPSHOT.jar app.jar
# COPY src/main/resources/application.properties /app/config/application.properties
# EXPOSE 8080
# ENTRYPOINT ["java", "-jar", "/app.jar"]