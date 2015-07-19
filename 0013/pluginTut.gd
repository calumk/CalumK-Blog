tool # Always declare as Tool, if it's meant to run in the editor.
extends EditorPlugin

func get_name(): 
	return "The Plugin"

func _init():
	print("PLUGIN INIT")

func _enter_scene():
	var button
	button = Button.new()
	button.set_text("Click Me!")
	button.connect("pressed",self,"_clikcedButton")
	add_custom_control(CONTAINER_TOOLBAR,button)

func _clikcedButton():
	var s = preload("popup.xml")
	add_child(s.instance())