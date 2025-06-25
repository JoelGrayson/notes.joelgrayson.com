```
// Getting
const (json, _) = try await URLSession.shared.data(from: url)
let object = try JSONDecoder().decode(ObjectType.self, from: json)

// Storing
URL


// Menu
Menu {
	Button("Option 1", action: { })
	Button("Option 2", action: { })
} label: {
	Label("Actions", systemImage: "ellipsis")
}
```
![[06.03.2025 screenshot 1.png]]


* .contextMenu for long-press actions
* Make previews able to have swift data
```swift
#Preview {
    let container = try! ModelContainer(for: Category.self, configurations: ModelConfiguration(isStoredInMemoryOnly: true))

    for item in MockData.categories {
        container.mainContext.insert(item)
    }

    return HomeTabView()
        .modelContainer(container)
}
```
* Navigation
	* `NavigationStack`
		* Attach to a child
		* `.navigationTitle(theTitle)`
		* `.navigationDestination(for: MyType.self) { selectedItem in ... }`
	* `NavigationLink(value:)`
* Types
	* MyClass - a type
	  MyClass.self - a value of the type
	  MyClass.Type - the type of `MyClass.self` (a metatype)

