
        const categoriaEmojis = {
            'libros': '📚',
            'ropa': '👕',
            'electronica': '🎮',
            'transporte': '🚲',
            'hogar': '🪑',
            'arte': '🎨'
        };

        
        let objetos = [
            { 
                nombre: "Bicicleta de montaña", 
                estado: "Muy buen estado", 
                usuario: "Ana García", 
                categoria: "transporte",
                descripcion: "Bicicleta usada poco, perfecta para paseos",
                disponible: true 
            },
            { 
                nombre: "Colección de libros de fantasía", 
                estado: "Buen estado", 
                usuario: "Carlos Ruiz", 
                categoria: "libros",
                descripcion: "10 libros de la saga Canción de Hielo y Fuego",
                disponible: true 
            },
            { 
                nombre: "Lámpara de escritorio LED", 
                estado: "Como nuevo", 
                usuario: "María López", 
                categoria: "hogar",
                descripcion: "Lámpara moderna con regulador de intensidad",
                disponible: true 
            },
            { 
                nombre: "Auriculares Bluetooth", 
                estado: "Buen estado", 
                usuario: "Pedro Martínez", 
                categoria: "electronica",
                descripcion: "Funcionan perfectamente, incluye estuche",
                disponible: true 
            },
            { 
                nombre: "Chaqueta de invierno", 
                estado: "Muy buen estado", 
                usuario: "Laura Fernández", 
                categoria: "ropa",
                descripcion: "Talla M, color negro, muy abrigada",
                disponible: true 
            },
            { 
                nombre: "Set de pinturas acrílicas", 
                estado: "Nuevo", 
                usuario: "Javier Torres", 
                categoria: "arte",
                descripcion: "24 colores, sin abrir",
                disponible: true 
            }
        ];

        
        function mostrarObjetos() {
            const grid = document.getElementById('objetosGrid');
            grid.innerHTML = '';

            if (objetos.length === 0) {
                grid.innerHTML = '<p style="text-align: center; grid-column: 1/-1;">No hay objetos disponibles aún. ¡Sé el primero en publicar!</p>';
                return;
            }

            objetos.forEach((obj, index) => {
                const card = document.createElement('div');
                card.className = 'objeto-card';
                
                const emoji = categoriaEmojis[obj.categoria] || '📦';
                
                card.innerHTML = `
                    <div class="objeto-img">${emoji}</div>
                    <div class="objeto-info">
                        <h3>${obj.nombre}</h3>
                        <p><strong>Estado:</strong> ${obj.estado}</p>
                        <p><strong>Usuario:</strong> ${obj.usuario}</p>
                        ${obj.descripcion ? `<p style="font-size: 0.9rem; margin-top: 10px;">${obj.descripcion}</p>` : ''}
                        <span class="badge ${obj.disponible ? 'badge-disponible' : 'badge-reservado'}">
                            ${obj.disponible ? '✅ Disponible' : '⏳ Reservado'}
                        </span>
                    </div>
                `;
                
                grid.appendChild(card);
            });
        }

        
        function mostrarAlerta(mensaje, tipo = 'success') {
            const container = document.getElementById('alertContainer');
            const alert = document.createElement('div');
            alert.className = `alert alert-${tipo}`;
            alert.textContent = mensaje;
            
            container.innerHTML = '';
            container.appendChild(alert);
            
            setTimeout(() => {
                alert.remove();
            }, 5000);
        }

        
        document.getElementById('formPublicar').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nombreObjeto = document.getElementById('nombreObjeto').value.trim();
            const categoria = document.getElementById('categoria').value;
            const estado = document.getElementById('estado').value;
            const descripcion = document.getElementById('descripcion').value.trim();
            const nombreUsuario = document.getElementById('nombreUsuario').value.trim();
            
            if (!nombreObjeto || !categoria || !estado || !nombreUsuario) {
                mostrarAlerta('⚠️ Por favor completa todos los campos obligatorios', 'error');
                return;
            }
            
            const nuevoObjeto = {
                nombre: nombreObjeto,
                estado: estado,
                usuario: nombreUsuario,
                categoria: categoria,
                descripcion: descripcion,
                disponible: true
            };
            
            objetos.unshift(nuevoObjeto);
            mostrarObjetos();
            
            mostrarAlerta(`✅ ¡Excelente! "${nombreObjeto}" ha sido publicado correctamente`, 'success');
            
            this.reset();
            
            document.getElementById('objetos').scrollIntoView({ behavior: 'smooth' });
        });

        
        document.getElementById('formContacto').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nombre = document.getElementById('nombre').value.trim();
            const email = document.getElementById('email').value.trim();
            const asunto = document.getElementById('asunto').value.trim();
            const mensaje = document.getElementById('mensaje').value.trim();
            
            if (!nombre || !email || !asunto || !mensaje) {
                alert('⚠️ Por favor completa todos los campos');
                return;
            }
            
            alert(`✅ Gracias ${nombre}! Tu mensaje ha sido enviado. Te responderemos pronto a ${email}`);
            this.reset();
        });

        
        const botonTema = document.getElementById('btn-tema');
        botonTema.addEventListener('click', () => {
            document.body.classList.toggle('oscuro');
            
            if (document.body.classList.contains('oscuro')) {
                botonTema.textContent = '☀️ Modo Claro';
            } else {
                botonTema.textContent = '🌗 Modo Oscuro';
            }
        });

        
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });

        
        mostrarObjetos();