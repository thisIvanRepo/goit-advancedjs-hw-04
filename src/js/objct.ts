const statuses = {ACTIVE: 'ACTIVE' as const, DISABLED: 'DISABLED' as const, INPROGRES: 'INPROGRES' as const, DONE: 'DONE' as const}
// можна так і з enum;
// enum statuses {ACTIVE = 'ACTIVE', DISABLED = 'DISABLED', INPROGRES = 'INPROGRES', DONE = 'DONE'}

type StatusTypes = keyof typeof statuses;
// не треба писати вручну ось так:
// type status = 'ACTIVE' | 'DISABLE' | 'INPROGRES' | 'DONE';
