# Calculadora React con Tailwind CSS

## Descripción General

Esta es una aplicación de calculadora básica construida con React y estilizada con Tailwind CSS. Proporciona funcionalidades matemáticas básicas.

## Características Principales

- Operaciones matemáticas básicas: suma, resta, multiplicación y división
- Funciones adicionales:
  - Cambio de signo (+/-)
  - Cálculo de porcentaje (%)
  - Entrada decimal
  - Borrado completo (AC)
- Diseño responsivo
- Interfaz de usuario minimalista

## Estructura del Código

La calculadora está implementada en un único componente de React que maneja todo el estado y la lógica de la aplicación.

### Estado

El componente utiliza varios estados para gestionar la calculadora:

- `display`: Muestra el valor actual en pantalla
- `previousValue`: Almacena el valor anterior para cálculos
- `operator`: Guarda la operación matemática actual
- `waitingForOperand`: Controla el estado de entrada de números

### Funciones Principales

1. `inputDigit(digit)`: 
   - Añade dígitos a la pantalla
   - Maneja el inicio de una nueva entrada

2. `inputDecimal()`: 
   - Agrega un punto decimal
   - Previene múltiples puntos decimales

3. `clearDisplay()`: 
   - Reinicia todos los estados
   - Restaura la pantalla al valor inicial de '0'

4. `performOperation(nextOperator)`: 
   - Realiza cálculos cuando se selecciona un operador
   - Gestiona cadenas de operaciones complejas

5. `calculate(firstOperand, secondOperand, operator)`: 
   - Función de cálculo que ejecuta operaciones matemáticas básicas

## Diseño

El diseño utiliza Tailwind CSS con:
- Cuadrícula de 4 columnas para los botones
- Colores:
  - Gris para botones de función
  - Naranja para botones de operaciones
  - Fondo gris claro.
