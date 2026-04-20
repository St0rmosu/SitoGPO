CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  descrizione TEXT,
  prezzo INTEGER,
  misure VARCHAR(100),
  provenienza VARCHAR(255),
  materiali VARCHAR(255),
  co2_risparmiato INTEGER,
  categoria VARCHAR(100),
  prima TEXT,
  dopo TEXT,
  immagini TEXT[]
);

INSERT INTO products (nome, slug, descrizione, prezzo, misure, provenienza, materiali, co2_risparmiato, categoria, prima, dopo, immagini) VALUES
('Scrivania Anni 70', 'scrivania-anni-70', 'Elegante scrivania degli anni 70 recuperata a Milano.', 450, '120x60x75 cm', 'Milano', 'Vernice ecologica', 25, 'Scrivanie', 'URL_FOTO_PRIMA', 'URL_FOTO_DOPO', ARRAY['URL_1','URL_2']),

('Como Vintage', 'como-vintage', 'Como degli anni 60 in stile italiano.', 380, '100x50x85 cm', 'Torino', 'Vernice bio', 18, 'Como', 'URL_FOTO_PRIMA', 'URL_FOTO_DOPO', ARRAY['URL_1','URL_2']),

('Libreria Mid-Century', 'libreria-mid-century', 'Libreria vintage degli anni 50 in teak.', 520, '90x35x180 cm', 'Firenze', 'Olio naturale', 22, 'Librerie', 'URL_FOTO_PRIMA', 'URL_FOTO_DOPO', ARRAY['URL_1','URL_2']),

('Tavolino DEpoca', 'tavolino-epoca', 'Tavolino da salotto anni 40 in stile Art Deco.', 290, '60x60x45 cm', 'Roma', 'Vernice laccata', 12, 'Tavolini', 'URL_FOTO_PRIMA', 'URL_FOTO_DOPO', ARRAY['URL_1','URL_2']),

('Armadio Anni 60', 'armadio-anni-60', 'Armadio a due ante degli anni 60 con specchio.', 580, '140x60x200 cm', 'Napoli', 'Vernice bianca', 35, 'Armadi', 'URL_FOTO_PRIMA', 'URL_FOTO_DOPO', ARRAY['URL_1','URL_2']),

('Tavolo Pranzo Rustico', 'tavolo-pranzo-rustico', 'Tavolo da pranzo in stile rustico toscano.', 650, '200x100x78 cm', 'Toscana', 'Olio lino', 45, 'Tavoli', 'URL_FOTO_PRIMA', 'URL_FOTO_DOPO', ARRAY['URL_1','URL_2']),

('Poltrona Chesterfield', 'poltrona-chesterfield', 'Poltrona Chesterfield originale anni 40.', 420, '85x85x90 cm', 'Londra', 'Pelle rigenerata', 15, 'Poltrone', 'URL_FOTO_PRIMA', 'URL_FOTO_DOPO', ARRAY['URL_1','URL_2']),

('Credenza Art Deco', 'credenza-art-deco', 'Credenza anni 30 in stile Art Deco.', 750, '180x50x90 cm', 'Parigi', 'Gommalacca', 38, 'Credenze', 'URL_FOTO_PRIMA', 'URL_FOTO_DOPO', ARRAY['URL_1','URL_2']),

('Letto Vittoriano', 'letto-vittoriano', 'Letto matrimoniale vittoriano in noce.', 950, '180x200x180 cm', 'Edimburgo', 'Cera api', 55, 'Letti', 'URL_FOTO_PRIMA', 'URL_FOTO_DOPO', ARRAY['URL_1','URL_2']),

('Scrivania Industriale', 'scrivania-industriale', 'Scrivania industriale anni 50.', 320, '150x70x78 cm', 'Torino', 'Vernice epossidica', 20, 'Scrivanie', 'URL_FOTO_PRIMA', 'URL_FOTO_DOPO', ARRAY['URL_1','URL_2']),

('Como Mid-Century', 'como-mid-century', 'Como mid-century in teak.', 480, '120x45x75 cm', 'Copenaghen', 'Olio naturale', 22, 'Como', 'URL_FOTO_PRIMA', 'URL_FOTO_DOPO', ARRAY['URL_1','URL_2']),

('Tavolino Centro', 'tavolino-centro', 'Tavolino da centro in vimini.', 180, '80x45x40 cm', 'Spagna', 'Vimini naturale', 8, 'Tavolini', 'URL_FOTO_PRIMA', 'URL_FOTO_DOPO', ARRAY['URL_1','URL_2']),

('Libreria Parete', 'libreria-parete', 'Libreria a parete modulare.', 380, '160x30x200 cm', 'Svezia', 'Legno pino', 18, 'Librerie', 'URL_FOTO_PRIMA', 'URL_FOTO_DOPO', ARRAY['URL_1','URL_2']),

('Poltrona Sdraio', 'poltrona-sdraio', 'Poltrona a sdraio in vimini.', 280, '70x85x100 cm', 'Bali', 'Vimini', 12, 'Poltrone', 'URL_FOTO_PRIMA', 'URL_FOTO_DOPO', ARRAY['URL_1','URL_2']),

('Credenza Bassa', 'credenza-bassa', 'Credenza bassa scandinava.', 520, '150x45x60 cm', 'Oslo', 'Olio rovere', 25, 'Credenze', 'URL_FOTO_PRIMA', 'URL_FOTO_DOPO', ARRAY['URL_1','URL_2']),

('Scrivania Minimal', 'scrivania-minimal', 'Scrivania minimalista quercia.', 380, '140x70x75 cm', 'Danimarca', 'Olio naturale', 20, 'Scrivanie', 'URL_FOTO_PRIMA', 'URL_FOTO_DOPO', ARRAY['URL_1','URL_2']),

('Armadio Specchio', 'armadio-specchio', 'Armadio con specchio.', 680, '150x60x210 cm', 'Milano', 'Vernice eco', 40, 'Armadi', 'URL_FOTO_PRIMA', 'URL_FOTO_DOPO', ARRAY['URL_1','URL_2']),

('Tavolo Allungabile', 'tavolo-allungabile', 'Tavolo allungabile noce.', 780, '160-220x90x78 cm', 'Firenze', 'Cera api', 35, 'Tavoli', 'URL_FOTO_PRIMA', 'URL_FOTO_DOPO', ARRAY['URL_1','URL_2']),

('Sedia Ufficio', 'sedia-ufficio', 'Sedia ufficio anni 70.', 220, '60x60x110 cm', 'Milano', 'Pelle', 10, 'Poltrone', 'URL_FOTO_PRIMA', 'URL_FOTO_DOPO', ARRAY['URL_1','URL_2']),

('Libreria Tower', 'libreria-tower', 'Libreria tower rotonda.', 450, '40x40x180 cm', 'Detroit', 'Metallo', 20, 'Librerie', 'URL_FOTO_PRIMA', 'URL_FOTO_DOPO', ARRAY['URL_1','URL_2']),

('Como Baiocco', 'como-baiocco', 'Como Baiocco intarsi.', 890, '130x55x90 cm', 'Ravenna', 'Lacca', 45, 'Como', 'URL_FOTO_PRIMA', 'URL_FOTO_DOPO', ARRAY['URL_1','URL_2']),

('Letto Singolo Ferro', 'letto-ferro', 'Letto singolo ferro.', 320, '90x200x100 cm', 'Brescia', 'Ferro', 15, 'Letti', 'URL_FOTO_PRIMA', 'URL_FOTO_DOPO', ARRAY['URL_1','URL_2']),

('Tavolino Consolle', 'tavolino-consolle', 'Tavolino consolle impero.', 350, '100x35x80 cm', 'Napoli', 'Marmo', 18, 'Tavolini', 'URL_FOTO_PRIMA', 'URL_FOTO_DOPO', ARRAY['URL_1','URL_2']),

('Poltrona Bergere', 'poltrona-bergere', 'Poltrona Bergere Luigi XV.', 480, '75x70x95 cm', 'Lione', 'Legno intagliato', 22, 'Poltrone', 'URL_FOTO_PRIMA', 'URL_FOTO_DOPO', ARRAY['URL_1','URL_2']),

('Credenza Country', 'credenza-country', 'Credenza country pino.', 580, '170x45x85 cm', 'USA', 'Chalk paint', 28, 'Credenze', 'URL_FOTO_PRIMA', 'URL_FOTO_DOPO', ARRAY['URL_1','URL_2']),

('Scrivania Director', 'scrivania-director', 'Scrivania director teak.', 550, '160x80x75 cm', 'Amsterdam', 'Olio rovere', 28, 'Scrivanie', 'URL_FOTO_PRIMA', 'URL_FOTO_DOPO', ARRAY['URL_1','URL_2']),

('Armadio Tre Ante', 'armadio-three', 'Armadio tre ante noce.', 820, '180x60x220 cm', 'Verona', 'Cera api', 42, 'Armadi', 'URL_FOTO_PRIMA', 'URL_FOTO_DOPO', ARRAY['URL_1','URL_2']),

('Tavolo Rustico', 'tavolo-rustico', 'Tavolo rustico castagno.', 720, '140-200x85x75 cm', 'Umbria', 'Olio lino', 38, 'Tavoli', 'URL_FOTO_PRIMA', 'URL_FOTO_DOPO', ARRAY['URL_1','URL_2']);