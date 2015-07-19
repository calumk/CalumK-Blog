extends Spatial

var red = preload("res://importedAssets/farm_tractor_01.scn")
var tractorArray = []
var tractorCount = -1
var timeElapsed = 0

func _ready():
	set_process(true)
	
func _process(delta):
	timeElapsed = timeElapsed + delta
	print(timeElapsed)
	if timeElapsed > 1:
		newTractor()
		timeElapsed = 0
		
	for tractor in tractorArray:
		var tractorPos = get_node(tractor).get_translation()
		tractorPos.z = tractorPos.z + 6 * delta
		get_node(tractor).set_translation(tractorPos)
	

func newTractor():
	tractorCount = tractorCount + 1
	var tractor_instance = red.instance()
	var tractorName = "tractor"+str(tractorCount)
	tractor_instance.set_name(tractorName)
	add_child(tractor_instance)
	get_node(tractorName).set_translation(Vector3(0.4,0,-7))
	tractorArray.push_back(tractorName)
	
	
