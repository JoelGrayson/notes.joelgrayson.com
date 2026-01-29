#!/bin/bash

# ABOUT: this file copies over the notes from Obsidian
# Note: please commit the Git repo before running this in case anything goes wrong

obsidian_path="/Users/joelgrayson/Library/Mobile Documents/iCloud~md~obsidian/Documents/Joel's Notes/notes.joelgrayson.com"
local_path="/Users/joelgrayson/Desktop/Software/joelgrayson.com/joelgrayson.com/notes.joelgrayson.com/src/do-not-edit/notes-copied-from-obsidian"
media_dest="/Users/joelgrayson/Desktop/Software/joelgrayson.com/joelgrayson.com/notes.joelgrayson.com/public/media"

rm -rf "$local_path"
cp -R "$obsidian_path" "$local_path"

rm -rf "$media_dest"
mv "$local_path/media" "$media_dest"

