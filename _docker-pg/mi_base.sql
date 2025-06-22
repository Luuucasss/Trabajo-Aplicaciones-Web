\c mi_base

-- Crear la tabla productos con campo imagen
CREATE TABLE IF NOT EXISTS productos (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100),
    marca VARCHAR(50),
    precio DECIMAL(10,2),
    descripcion TEXT,
    imagen VARCHAR(100)  -- Nuevo campo para el nombre de la imagen
);

-- Insertar 20 productos con nombres de imagen
INSERT INTO productos (nombre, marca, precio, descripcion, imagen) VALUES
('Laptop X14', 'Lenovo', 799.99, 'Portátil con procesador Intel i5 y 8GB RAM.', 'laptop_x14.jpg'),
('Smartphone Galaxy S21', 'Samsung', 999.00, 'Teléfono inteligente con pantalla AMOLED de 6.2 pulgadas.', 'galaxy_s21.jpg'),
('Auriculares QuietComfort 45', 'Bose', 329.99, 'Auriculares con cancelación activa de ruido.', 'quietcomfort_45.jpg'),
('Smartwatch Series 8', 'Apple', 499.00, 'Reloj inteligente con sensor de temperatura y ECG.', 'series8.jpg'),
('Monitor UltraSharp', 'Dell', 379.99, 'Monitor 27" 4K UHD con colores precisos.', 'ultrasharp.jpg'),
('Teclado mecánico K70', 'Corsair', 129.99, 'Teclado mecánico RGB con switches Cherry MX.', 'k70.jpg'),
('Tablet Tab S8', 'Samsung', 679.00, 'Tableta con pantalla de 11 pulgadas y S Pen incluido.', 'tab_s8.jpg'),
('Mouse MX Master 3', 'Logitech', 99.99, 'Ratón inalámbrico ergonómico para productividad.', 'mx_master_3.jpg'),
('Disco SSD 1TB', 'Kingston', 109.50, 'Unidad de estado sólido con velocidad de lectura de hasta 550 MB/s.', 'ssd_1tb.jpg'),
('Impresora EcoTank L3250', 'Epson', 189.00, 'Impresora multifunción con sistema de tinta recargable.', 'ecotank_l3250.jpg'),
('Cámara EOS M50', 'Canon', 649.00, 'Cámara mirrorless de 24MP con grabación 4K.', 'eos_m50.jpg'),
('Smart TV 55" QLED', 'TCL', 529.00, 'Televisor inteligente 4K con tecnología QLED.', 'smarttv_qled.jpg'),
('Router AX1800', 'TP-Link', 89.99, 'Router Wi-Fi 6 de alta velocidad.', 'ax1800.jpg'),
('Batería externa 20000mAh', 'Anker', 49.99, 'Power bank con carga rápida Power Delivery.', 'anker_20000.jpg'),
('Altavoz Bluetooth Flip 6', 'JBL', 119.95, 'Altavoz portátil resistente al agua.', 'flip6.jpg'),
('Lámpara LED Inteligente', 'Philips Hue', 59.90, 'Lámpara RGB controlable por app.', 'hue_lampara.jpg');

