const URL_GAS = "https://script.google.com/macros/s/AKfycbweCzGjeJJa8zsclBUr7Q-lbkNDTyPRh9DY7GncoPYiOEyAca0hBOIA5GPf7t3Rcfo-FQ/exec";

// Função Global de Cores por Regional
function obterCorRegional(regional) {
    if (!regional) return "#e5e7eb"; // Cinza claro se vier vazio
    
    const reg = regional.toLowerCase();
    
    if (reg.includes("vitória") || reg.includes("vitoria")) {
        return "#3b82f6"; // Azul para Vitória
    }
    if (reg.includes("valadares")) {
        return "#f59e0b"; // Laranja para Gov. Valadares
    }
    if (reg.includes("itabira")) {
        return "#10b981"; // Verde para Itabira
    }
    
    return "#8b5cf6"; // Roxo (Cor padrão para novas regionais não mapeadas acima)
}