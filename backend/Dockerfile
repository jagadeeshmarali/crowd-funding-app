FROM maven:3.8.5-openjdk-11 AS maven_build
COPY pom.xml /app/
COPY src /app/src/
WORKDIR /app/
RUN mvn package
# FROM openjdk
EXPOSE 8080
# COPY --from=maven_build /target/core-java-0.0.1-SNAPSHOT-spring-boot.jar /data/core-java-0.0.1-SNAPSHOT-spring-boot.jar
ENTRYPOINT [ "java" ,"-jar","core-java-0.0.1-SNAPSHOT-spring-boot.jar" ]