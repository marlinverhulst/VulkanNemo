#version 450


layout( location = 0) in vec3 fragColor;
layout(location = 0) out vec4 outColour;

void main(){
	outColour = vec4(fragColor, 1.0);
}