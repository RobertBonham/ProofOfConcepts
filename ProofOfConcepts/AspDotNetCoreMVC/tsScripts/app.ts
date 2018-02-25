function Welcome(person: string) {
    return "<h2>Hello " + person + ", this is TypeScript</h2>";
}

function ClickMeButton() {
    let user: string = "BonhamRL";
    document.getElementById("divMsg").innerHTML = Welcome(user);
}