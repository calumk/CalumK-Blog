import xml.etree.ElementTree as et
input_xml = open('blocks.xml','r')
tree = et.parse(input_xml)
root = tree.getroot()
resolution = 35;
unit = 70;

class blockType(object):
    x = 0
    y = 0

    # The class "constructor" - It's actually an initializer 
    def __init__(self, x, y):
        self.x = y
        self.y = x

def make_block(x, y):
    block = blockType(x*unit, y*unit)
    return block

blockType_cube_h = make_block(1,1)

print block_cube_h.x;


for x in range(0, len(root)):
    print(root[x][0].text)
    print(root[x][1].text)
    print(root[x][2].text)
    block123 = make_block(int(root[x][3].text) ,int(root[x][4].text) ) 
    print(block123.x)
    print(block123.y)
    print(":::::::::::::")
    
    