---
title: Convierte visualmente Ubuntu en MacOS
date: "2023-03-19T23:04:00"
description: Muchos de nosotros amamos MacOS, pero pocos tenemos la posibilidad de permitirnoslo. Por eso te explico como podés personalizar Ubuntu para que se vea y se sienta como MacOS.
tags:
  - ubuntu
  - themes
  - macos
---

## Requisitos previos

- Ubuntu 20.04 o 22.04 (el que uso yo).

## Resultados finales

La intención principal de este post es que puedas tener un Ubuntu que se vea y se sienta como MacOS. Para eso, vamos a instalar un tema, 3 extensiones y cambiar el fondo de pantalla.

Todo esto manteniendo lo más vanilla posible, para evitar degradar el rendimiento del sistema y el uso de recursos.

### Escritorio vacío

![Resultado final desktop vacio](/images/convierte-ubuntu-en-macos/final-result-desktop.png)
![Resultado final desktop vacio monterey wallpaper](/images/convierte-ubuntu-en-macos/final-result-desktop-2.png)

### Escritorio con aplicaciones

![Resultado final desktop con aplicaciones](/images/convierte-ubuntu-en-macos/final-result-with-apps.png)

Algo importante a destacar son las puntas redondeadas de las ventanas (en adelante **corners**) y los bordes típicos de MacOS.

Si observas bien la última imágen vas a ver que todas las aplicaciones, incluso las que no son nativas (no usan GTK) tiene los bordes redondeados.

Esto es algo que no vas a encontrar en casi ningun tutorial o guía y me parece fundamental para lograr los resultados esperados.

## Paso 1: Barra de tareas a Dock

Vamos a empezar por lo más fácil, la barra de tareas.

Tené en cuenta que estoy usando Ubuntu 22.04 y que la barra de tareas es nativa de Gnome, por lo que no necesitamos instalar nada, si estas usando versiones de Ubuntu más antiguas, deberás buscar alternativas.

1. Nos dirigimos a **Configuración del sistema** > **Apariencia** > **Dock**.
2. Copiate las siguientes configuraciones:
   ![Ajustes de apariencia](/images/convierte-ubuntu-en-macos/settings-dock.png)
   ![Ajustes de apariencia como quedó](/images/convierte-ubuntu-en-macos/settings-dock-show.png)

## Paso 2: Activar los tweaks

```bash
sudo apt install gnome-tweak-tool
```

En tu cajón de aplicaciones vas a encontrar la aplicación **Tweaks**.

La usaremos más tarde.

## Paso 3: Instalar el tema

El tema que vamos a instalar es [WhiteSur-gtk-theme de VinceLiuice](https://github.com/vinceliuice/WhiteSur-gtk-theme)

Nos debemos clonar el repositorio y ejecutar el script de instalación.

```bash
cd ~
git clone https://github.com/vinceliuice/WhiteSur-gtk-theme.git
cd WhiteSur-gtk-theme
./install.sh -l -N stable --round --darker
sudo ./tweaks.sh -g -f
```

En caso de querer personalizar la instalación te recomiendo que leas la documentación del repositorio.

## Paso 4: Instalar los Íconos

Los íconos que vamos a instalar son [WhiteSur-icon-theme de VinceLiuice](https://github.com/vinceliuice/WhiteSur-icon-theme)

Nos debemos clonar el repositorio y ejecutar el script de instalación.

```bash
cd ~
git clone https://github.com/vinceliuice/WhiteSur-icon-theme.git
cd WhiteSur-icon-theme
./install.sh
```

En caso de querer personalizar la instalación te recomiendo que leas la documentación del repositorio.

## Paso 5: Instalar las extensiones

```bash
sudo apt install gnome-shell-extension-manager
```

En tu cajón de aplicaciones vas a encontrar la aplicación **Administrador de extensiones** o **Extension manager**.
![Buscando extension manager](/images/convierte-ubuntu-en-macos/extension-manager-search.png)

Una vez adentro de la aplicación, vamos a descargar las siguientes extensiones:

- Rounded window corners
- User themes
- Unite

![Instala user-themes](/images/convierte-ubuntu-en-macos/install-user-themes.png)
![Instala rounded window corners](/images/convierte-ubuntu-en-macos/install-rounded-window-corners.png)
**Verifica que el autor sea de `yilozt`**
![Instalar Unite](/images/convierte-ubuntu-en-macos/install-unite.png)

## Paso 6: Habilitar las extensiones

![Habilita las extension](/images/convierte-ubuntu-en-macos/enable-extensions.png)

Deja habilitadas las extensiones que acabamos de instalar.

Una vez hecho esto podemos cerrar la aplicación.

Te invito a revisar los ajustes de cada una de las extensiones para que puedas personalizarlas a tu gusto.

## Paso 7: Establecer el tema y los íconos

1. Vamos a abrir la aplicación **Tweaks** y vamos a ir a **Apariencia**.
2. Copiate las siguientes configuraciones:
   ![Configuraciones tweaks](/images/convierte-ubuntu-en-macos/settings-tweaks.png)
3. En **Íconos** seleccioná **WhiteSur-dark**.
4. En **Shell** seleccioná **WhiteSur-dark**.
5. En **Aplicaciones** seleccioná **WhiteSur-dark**.

Luego de estos cambios verás una gran diferencia en el aspecto de tu escritorio.

## Paso 8 (opcional): Cambiar el fondo de pantalla

Este te lo dejo a tu gusto, pero te recomiendo que uses uno de los wallpapers de la última versión de MacOS, Monterey.

## Paso 9 (opcional): Instalar la extension 'Blur my shell'

Esta extensión no es necesaria para lograr lo que buscamos, pero si te gusta el efecto de blur que tiene el fondo de pantalla de MacOS, te recomiendo que la instales.
![Ejemplo de blur my shel](/images/convierte-ubuntu-en-macos/blur-my-shell-example.png)

En caso de instalarla deberías probar configurarla según tu parecer.

Tiene una configuración bastante simple pero poderosa, hasta quizas logres algo mejor que el efecto de blur de MacOS.

## Paso 10 (opcional): Global menu

Una de las features que unifica el menú de cada aplicación en el menú de la barra de tareas es la extensión **Fildem Global menu**.

Ahora bien, esta extensión no es compatible de momento con Gnome 42+, por lo que si estás usando Ubuntu 22.04 o superior, no podrás instalarla, **al menos de momento**.

Probá de verificar si cuando estés leyendo esto ya está disponible para Gnome 42+.

Esta extensión es bastante útil, ya que te permite tener el menú de cada aplicación en la barra de tareas, lo que hace que el escritorio se vea mucho más limpio.

## Por último

- Va a sonar a cliché pero debes reiniciar tu sistema para que los cambios se terminen de aplicar.
- Te recomiendo que juegues un poco con las configuraciones de las extensiones que instalamos en el paso 5.
- En los pasos 3 y 4 hay muchas opciones y variantes que te permiten personalizar el tema y los íconos, te recomiendo que leas la documentación de cada uno de ellos para que puedas personalizarlos a tu gusto.
