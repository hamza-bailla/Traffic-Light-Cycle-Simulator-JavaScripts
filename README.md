**Traffic Light Cycle Simulator**
A clean, logic-driven simulation of a traffic light system built with Vanilla JavaScript. This project focuses on state management and the use of recursive timing to handle variable durations for different light states.

**How it Works**
The project uses a State-Driven approach. Rather than hard-coding transitions, it iterates through an array of objects that define the sequence and the specific timing for each phase.

Logic: Uses recursive setTimeout to allow unique durations (e.g., Red for 5s, Yellow for 2s).

UI/UX: Transitions are handled via CSS classes (.active) to ensure a smooth visual glow effect and clean separation of concerns.

Safety: Includes a control guard to prevent multiple intervals from running simultaneously if the start button is clicked repeatedly.

**Tech Stack**
HTML5: Semantic structure for the traffic light housing.

CSS3: Advanced styling using box-shadow for the glowing effect and flexbox for alignment.

JavaScript (ES6): Array manipulation, DOM event listeners, and timing functions.
-------
**Ampelphasen-Simulator**
Eine saubere, logikgesteuerte Simulation eines Ampelsystems, entwickelt mit Vanilla JavaScript. Dieses Projekt konzentriert sich auf das State-Management und die Verwendung von rekursivem Timing, 
um unterschiedliche Dauern für verschiedene Ampelphasen zu steuern.

**Funktionsweise**
Das Projekt verfolgt einen State-Driven (zustandsgesteuerten) Ansatz. Anstatt Übergänge fest zu programmieren, iteriert es durch ein Array von Objekten, welche die Sequenz und das spezifische Timing für jede Phase definieren.

**Logik:** Nutzt rekursive setTimeout-Aufrufe, um individuelle Zeitspannen zu ermöglichen (z. B. Rot für 5s, Gelb for 2s).

**UI/UX:** Übergänge werden über CSS-Klassen (.active) gesteuert, was einen weichen visuellen Leuchteffekt garantiert und eine saubere Trennung von Logik und Design ermöglicht.

**Sicherheit:** Enthält eine Kontrollinstanz, die verhindert, dass mehrere Timer gleichzeitig laufen, falls die Start-Taste mehrfach gedrückt wird.

**Verwendete Technologien**
**HTML5: **Semantische Struktur für das Ampelgehäuse.

**CSS3: **Fortgeschrittenes Styling mit box-shadow für den Leuchteffekt und flexbox für die Ausrichtung.

**JavaScript (ES6): **Array-Manipulation, DOM-Event-Listener und Timing-Funktionen.
