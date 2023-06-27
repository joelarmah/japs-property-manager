function getInitials(name) {
	if (name) {
		return name.split(" ").map((n)=>n[0]).join("");
	}
}

export { getInitials };