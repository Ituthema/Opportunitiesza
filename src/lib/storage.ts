import { useState, useEffect } from "react";

const STORAGE_KEY = "career_sa_saved";

export function getSavedOpportunities(): string[] {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

export function useSavedOpportunities() {
  const [savedIds, setSavedIds] = useState<string[]>(getSavedOpportunities());

  useEffect(() => {
    const handleStorageChange = () => {
      setSavedIds(getSavedOpportunities());
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const toggleSave = (id: string) => {
    const current = getSavedOpportunities();
    let updated;
    if (current.includes(id)) {
      updated = current.filter(savedId => savedId !== id);
    } else {
      updated = [...current, id];
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    setSavedIds(updated);
    // Dispatch event so other components update immediately
    window.dispatchEvent(new Event("storage"));
  };

  const isSaved = (id: string) => savedIds.includes(id);

  return { savedIds, toggleSave, isSaved };
}
