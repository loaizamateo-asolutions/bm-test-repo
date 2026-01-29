# CLAUDE.md - Benchmark Minerals Code Guidelines

## Project Overview
This is a NestJS-based API for Benchmark Minerals market data (prices, supply chain, forecasts).

## Code Standards

### General
- All code must be written in TypeScript with strict mode enabled
- Use English for all code, comments, variable names, and documentation
- Never commit `.env` files or hardcoded secrets/API keys
- All endpoints must validate input using DTOs with class-validator decorators

### Naming Conventions
- Use `camelCase` for variables and functions
- Use `PascalCase` for classes, interfaces, and types
- Use `UPPER_SNAKE_CASE` for constants
- Prefix interfaces with `I` (e.g., `IMarketPrice`)
- Suffix DTOs with `Dto` (e.g., `CreatePriceDto`)
- Suffix services with `Service`, controllers with `Controller`

### Error Handling
- Always use try-catch blocks in service methods that call external APIs or databases
- Never expose internal error details to the client; use HttpException with appropriate status codes
- Log errors with context using the NestJS Logger

### API Design
- All API responses must follow the standard response format: `{ $metadata: {...}, data: [...] }`
- Use POST for endpoints that accept filters in the request body
- Always include pagination for list endpoints
- All endpoints must have proper authorization checks using guards

### Security
- Never trust user input; always validate and sanitize
- Use parameterized queries; never concatenate user input into SQL strings
- API keys must be validated on every request (except /health)
- Sensitive data must never be logged

### Testing
- All service methods must have unit tests
- Test files must be colocated with source files using `.spec.ts` suffix
- Mock external dependencies in unit tests

### Git
- Commit messages must be in English
- Branch names must follow: `feature/`, `fix/`, `hotfix/`, `chore/` prefixes
- Never push directly to `main`; always use pull requests
