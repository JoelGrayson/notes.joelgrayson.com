```
// Getting
const (json, _) = try await URLSession.shared.data(from: url)
let object = try JSONDecoder().decode(ObjectType.self, from: json)

// Storing
URL
```
