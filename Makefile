local:
	python3 -m http.server 8000

echo_path:
	echo "$(find assets/ -name '*.png' -type f -exec printf '\"%s\",\n' {} +)"
