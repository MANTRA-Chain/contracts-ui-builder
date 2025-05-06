import type { FieldType } from '@openzeppelin/transaction-form-types';

// Placeholder
export const SOLANA_TYPE_TO_FIELD_TYPE: Record<string, FieldType> = {
  string: 'text',
  u64: 'number',
  publicKey: 'blockchain-address',
  // Add more Solana types
};
