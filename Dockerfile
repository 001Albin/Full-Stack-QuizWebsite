# -------- Build Stage --------
FROM eclipse-temurin:21-jdk AS build

WORKDIR /app

# Copy the Maven wrapper and project files
COPY quizBackend/quizApp/quizApp /app

# Build the JAR file
RUN ./mvnw clean package -DskipTests

# -------- Run Stage --------
FROM eclipse-temurin:21-jre

WORKDIR /app

# Copy the built JAR from the build stage
COPY --from=build /app/target/quizApp-0.0.1-SNAPSHOT.jar app.jar

# Run the application
ENTRYPOINT ["java", "-jar", "app.jar"]
