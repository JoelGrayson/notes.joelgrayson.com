#!/bin/bash

# ABOUT: this file copies over the notes from Obsidian

obsidian_path="/Users/joelgrayson/Library/Mobile Documents/iCloud~md~obsidian/Documents/Joel's Notes/notes.joelgrayson.com"
local_path="/Users/joelgrayson/Desktop/Software/joelgrayson.com/joelgrayson.com/notes.joelgrayson.com/src/do-not-edit/notes-copied-from-obsidian"

rm -rf "$local_path"
cp -R "$obsidian_path" "$local_path"

