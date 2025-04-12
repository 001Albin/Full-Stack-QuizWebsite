# Use a multi-stage build: build and run stages

# Build Stage
FROM eclipse-temurin:21-jdk as build

# Set the working directory for the build stage
WORKDIR /app

# Copy the entire quizBackend/quizApp/quizApp folder into the container
COPY quizBackend/quizApp/quizApp /app

# Make sure mvnw is executable
RUN chmod +x ./mvnw

# Build the JAR file (skip tests for faster build)
RUN ./mvnw clean package -DskipTests

# -------- Run Stage --------
FROM eclipse-temurin:21-jre as run

# Set the working directory for the run stage
WORKDIR /app

# Copy the built JAR file from the build stage
COPY --from=build /app/target/quizApp-0.0.1-SNAPSHOT.jar app.jar

# Run the application
ENTRYPOINT ["java", "-jar", "app.jar"]
