// location: components/gallery/types.js

import { GALLERY } from "./gallery.data";

export function getCollectionById(id) {
  return GALLERY.collections.find((c) => c.id === id);
}

export function getItemsByTag(tag, limit) {
  const items = [];
  GALLERY.collections.forEach((collection) => {
    collection.items.forEach((item) => {
      if (collection.tags.includes(tag)) {
        items.push({ ...item, collectionId: collection.id });
      }
    });
  });
  return limit ? items.slice(0, limit) : items;
}

export function getFeaturedItems(limit) {
  const items = [];
  GALLERY.collections.forEach((collection) => {
    collection.items.forEach((item) => {
      if (item.featured) {
        items.push({ ...item, collectionId: collection.id });
      }
    });
  });
  return limit ? items.slice(0, limit) : items;
}

export function getItemsByTags(tags, limit) {
  const items = [];
  GALLERY.collections.forEach((collection) => {
    collection.items.forEach((item) => {
      const itemTags = item.tags || collection.tags;
      const hasAllTags = tags.every(tag => itemTags.includes(tag));
      if (hasAllTags) {
        items.push({ ...item, collectionId: collection.id });
      }
    });
  });
  return limit ? items.slice(0, limit) : items;
}

export function getAllCollections() {
  return GALLERY.collections;
}