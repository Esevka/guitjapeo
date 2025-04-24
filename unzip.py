import subprocess

def getpassword(line,passtxt_anterior):

	if ("Python" in line):
		lenguaje = "python"

	elif ('Ruby' in line):
		lenguaje = "ruby"

	elif ('PHP' in line):
		lenguaje = "php -f"

	elif ('JavaScript' in line):
		lenguaje = "node"

	else:
		print('[-]Lenguaje Desconocido en password.txt')
		return passtxt_anterior

	result = subprocess.run([f"{lenguaje} password.txt"],capture_output=True,shell=True,text=True)
	return result.stdout.strip()

def zip(passtxt):

	result = subprocess.run([f"7z x -y -p'{passtxt}' archivo.zip"],capture_output=True,shell=True,text=True)

	if('Everything is Ok' in result.stdout):
		print("[+]Descompresion Ok")
	else:
		print("[-]Problemas al descomprimir")
		exit()


def main():

	passtxt_anterior=None
	x=0

	while True:

		with open('password.txt','r') as text:

			line = text.readline().strip().split()

		passtxt_actual = getpassword(line,passtxt_anterior)


		if (passtxt_anterior == passtxt_actual):
			print(f"[+]Ultima clave obtenida [{x}]: {passtxt_actual}")
			break

		else:
			x+=1
			print(f"[+]Nueva clave detectada [{x}]: {passtxt_actual}")
			passtxt_anterior = passtxt_actual
			zip(passtxt_actual)
		

if __name__ == '__main__':
	main()
