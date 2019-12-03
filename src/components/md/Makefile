MD_SRC = $(shell ls *.md)

md2html: $(MD_SRC:%.md=%.html)

%.html: %.md
	@ pandoc -f markdown -t html $*.md -o $.html

