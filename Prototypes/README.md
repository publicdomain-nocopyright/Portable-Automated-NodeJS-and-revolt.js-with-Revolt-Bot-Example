Latest issues:
I'm starting a new child process by specifying a function(), using spawn.
After editing the function() and respawning the child process for the function():
the newly spawned child process does not include changes to the function().
4:37
I really do not want to put the function into a separate file and try to delete require/import caches.
Even if it all have some chance to work.
4:37
Maybe someone have some understanding on how could I ensure the newly spawned child would include the changes of function()
