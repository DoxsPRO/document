<!-- CreateAccount.vue -->

<script>
import { ref } from 'vue';
import { useVueform, Vueform } from '@vueform/vueform';

export default {
  mixins: [Vueform],
  setup(props, context) {
    const form = useVueform(props, context);

    const vueform = ref({
      size: 'md',
      displayErrors: false,
      addClass: 'vf-create-account',
      schema: {
        dati_persona: {
          type: 'group',
          schema: {
            nome_persona: {
              type: 'text',
              placeholder: 'Nome',
              columns: {
                container: 6,
                label: 12,
                wrapper: 12,
              },
              fieldName: 'First name',
              rules: ['required', 'max:255'],
            },
            cognome_persona: {
              type: 'text',
              placeholder: 'Cognome',
              columns: {
                container: 6,
                label: 12,
                wrapper: 12,
              },
              fieldName: 'Last name',
              rules: ['required', 'max:255'],
            },
            data_persona: {
              type: 'date',
              fieldName: 'Birthday',
              rules: ['required'],
              displayFormat: 'Do MMMM, YYYY',
              valueFormat: 'DD-MM-YYYY',
              loadFormat: 'DD-MM-YYYY',
              min: '01-01-1900',
              placeholder: '--/--/----',
              columns: {
                container: 4,
              },
            },
            comune_persona: {
              type: 'text',
              columns: {
                container: 8,
              },
              placeholder: 'Comune e provincia / Stato estero',
              rules: ['required'],
            },
            nazione_persona: {
              type: 'select',
              search: true,
              native: false,
              inputType: 'search',
              autocomplete: 'off',
              placeholder: 'Nazionalità (opzionale)',
              items: [
                {
                  value: 'Afghanistan',
                  label: 'AF',
                },
                {
                  value: 'Albania',
                  label: 'AL',
                },
                {
                  value: 'Algeria',
                  label: 'DZ',
                },
                {
                  value: 'Andorra',
                  label: 'AD',
                },
                {
                  value: 'Angola',
                  label: 'AO',
                },
                {
                  value: 'Antigua and Barbuda',
                  label: 'AG',
                },
                {
                  value: 'Argentina',
                  label: 'AR',
                },
                {
                  value: 'Armenia',
                  label: 'AM',
                },
                {
                  value: 'Australia',
                  label: 'AU',
                },
                {
                  value: 'Austria',
                  label: 'AT',
                },
                {
                  value: 'Azerbaijan',
                  label: 'AZ',
                },
                {
                  value: 'Bahamas',
                  label: 'BS',
                },
                {
                  value: 'Bahrain',
                  label: 'BH',
                },
                {
                  value: 'Bangladesh',
                  label: 'BD',
                },
                {
                  value: 'Barbados',
                  label: 'BB',
                },
                {
                  value: 'Belarus',
                  label: 'BY',
                },
                {
                  value: 'Belgium',
                  label: 'BE',
                },
                {
                  value: 'Belize',
                  label: 'BZ',
                },
                {
                  value: 'Benin',
                  label: 'BJ',
                },
                {
                  value: 'Bhutan',
                  label: 'BT',
                },
                {
                  value: 'Bolivia',
                  label: 'BO',
                },
                {
                  value: 'Bosnia and Herzegovina',
                  label: 'BA',
                },
                {
                  value: 'Botswana',
                  label: 'BW',
                },
                {
                  value: 'Brazil',
                  label: 'BR',
                },
                {
                  value: 'Brunei Darussalam',
                  label: 'BN',
                },
                {
                  value: 'Bulgaria',
                  label: 'BG',
                },
                {
                  value: 'Burkina Faso',
                  label: 'BF',
                },
                {
                  value: 'Burundi',
                  label: 'BI',
                },
                {
                  value: 'Cabo Verde',
                  label: 'CV',
                },
                {
                  value: 'Cambodia',
                  label: 'KH',
                },
                {
                  value: 'Cameroon',
                  label: 'CM',
                },
                {
                  value: 'Canada',
                  label: 'CA',
                },
                {
                  value: 'Central African Republic',
                  label: 'CF',
                },
                {
                  value: 'Chad',
                  label: 'TD',
                },
                {
                  value: 'Chile',
                  label: 'CL',
                },
                {
                  value: 'China',
                  label: 'CN',
                },
                {
                  value: 'Colombia',
                  label: 'CO',
                },
                {
                  value: 'Comoros',
                  label: 'KM',
                },
                {
                  value: 'Congo (Congo-Brazzaville)',
                  label: 'CG',
                },
                {
                  value: 'Congo (Democratic Republic of the)',
                  label: 'CD',
                },
                {
                  value: 'Costa Rica',
                  label: 'CR',
                },
                {
                  value: 'Croatia',
                  label: 'HR',
                },
                {
                  value: 'Cuba',
                  label: 'CU',
                },
                {
                  value: 'Cyprus',
                  label: 'CY',
                },
                {
                  value: 'Czech Republic',
                  label: 'CZ',
                },
                {
                  value: 'Denmark',
                  label: 'DK',
                },
                {
                  value: 'Djibouti',
                  label: 'DJ',
                },
                {
                  value: 'Dominica',
                  label: 'DM',
                },
                {
                  value: 'Dominican Republic',
                  label: 'DO',
                },
                {
                  value: 'Ecuador',
                  label: 'EC',
                },
                {
                  value: 'Egypt',
                  label: 'EG',
                },
                {
                  value: 'El Salvador',
                  label: 'SV',
                },
                {
                  value: 'Equatorial Guinea',
                  label: 'GQ',
                },
                {
                  value: 'Eritrea',
                  label: 'ER',
                },
                {
                  value: 'Estonia',
                  label: 'EE',
                },
                {
                  value: 'Eswatini (fmr. "Swaziland")',
                  label: 'SZ',
                },
                {
                  value: 'Ethiopia',
                  label: 'ET',
                },
                {
                  value: 'Fiji',
                  label: 'FJ',
                },
                {
                  value: 'Finland',
                  label: 'FI',
                },
                {
                  value: 'France',
                  label: 'FR',
                },
                {
                  value: 'Gabon',
                  label: 'GA',
                },
                {
                  value: 'Gambia',
                  label: 'GM',
                },
                {
                  value: 'Georgia',
                  label: 'GE',
                },
                {
                  value: 'Germany',
                  label: 'DE',
                },
                {
                  value: 'Ghana',
                  label: 'GH',
                },
                {
                  value: 'Greece',
                  label: 'GR',
                },
                {
                  value: 'Grenada',
                  label: 'GD',
                },
                {
                  value: 'Guatemala',
                  label: 'GT',
                },
                {
                  value: 'Guinea',
                  label: 'GN',
                },
                {
                  value: 'Guinea-Bissau',
                  label: 'GW',
                },
                {
                  value: 'Guyana',
                  label: 'GY',
                },
                {
                  value: 'Haiti',
                  label: 'HT',
                },
                {
                  value: 'Honduras',
                  label: 'HN',
                },
                {
                  value: 'Hungary',
                  label: 'HU',
                },
                {
                  value: 'Iceland',
                  label: 'IS',
                },
                {
                  value: 'India',
                  label: 'IN',
                },
                {
                  value: 'Indonesia',
                  label: 'ID',
                },
                {
                  value: 'Iran',
                  label: 'IR',
                },
                {
                  value: 'Iraq',
                  label: 'IQ',
                },
                {
                  value: 'Ireland',
                  label: 'IE',
                },
                {
                  value: 'Israel',
                  label: 'IL',
                },
                {
                  value: 'Italy',
                  label: 'IT',
                },
              ],
            },
            cellulare_persona: {
              type: 'phone',
              placeholder: 'Cellulare',
              fieldName: 'Phone',
              allowIncomplete: true,
              unmask: true,
            },
            toggle_sfd: {
              type: 'toggle',
              text: 'Senza fissa dimora',
            },
          },
          label: 'Dati persona',
        },
        divider: {
          type: 'static',
          tag: 'hr',
        },
        residenza_persona: {
          type: 'group',
          schema: {
            comune_residenza_persona: {
              type: 'text',
              placeholder: 'Comune e provincia / Stato estero',
            },
            via_residenza_persona: {
              type: 'text',
              placeholder: 'Via',
              columns: {
                lg: {
                  container: 9,
                },
                default: {
                  container: 6,
                },
              },
            },
            civico_residenza_persona: {
              type: 'text',
              columns: {
                default: {
                  container: 6,
                },
                lg: {
                  container: 3,
                },
              },
              placeholder: 'Civ.',
            },
            info_residenza_persona: {
              type: 'text',
              placeholder: 'Scala, piano, ....',
            },
            toggle_domicilio: {
              type: 'toggle',
              text: 'Domicilio diverso',
            },
            domicilio_persona: {
              type: 'group',
              schema: {
                comune_domicilio_persona: {
                  type: 'text',
                  placeholder: 'Comune e provincia / Stato estero',
                },
                via_domicilio_persona: {
                  type: 'text',
                  placeholder: 'Via',
                  columns: {
                    lg: {
                      container: 9,
                    },
                    default: {
                      container: 6,
                    },
                  },
                },
                civico_domicilio_persona: {
                  type: 'text',
                  columns: {
                    default: {
                      container: 6,
                    },
                    lg: {
                      container: 3,
                    },
                  },
                  placeholder: 'Civ.',
                  inputType: 'number',
                },
                info_domicilio_persona: {
                  type: 'text',
                  placeholder: 'Scala, piano, ....',
                },
              },
              conditions: [['residenza_persona.toggle_domicilio', '==', true]],
              label: 'Domicilio',
            },
          },
          conditions: [['dati_persona.toggle_sfd', '==', false]],
          label: 'Residenza',
        },
        toggle_senza_doc: {
          type: 'toggle',
          text: 'Maomao',
        },
        documento_persona: {
          type: 'group',
          schema: {
            tipo_documento: {
              type: 'text',
              placeholder: 'Tipo documento',
              columns: {
                lg: {
                  container: 4,
                },
              },
            },
            numero_documento: {
              type: 'text',
              placeholder: 'Numero',
              columns: {
                default: {
                  container: 6,
                },
                lg: {
                  container: 3,
                },
              },
            },
            autorita_documento: {
              type: 'text',
              columns: {
                default: {
                  container: 6,
                },
                lg: {
                  container: 5,
                },
              },
              placeholder: 'Autorità',
            },
            dataRil_documento: {
              type: 'text',
              columns: {
                lg: {
                  container: 4,
                },
              },
              placeholder: 'Rilasciato il',
            },
            dataSca_documento: {
              type: 'text',
              columns: {
                lg: {
                  container: 8,
                },
              },
              placeholder: 'Scadenza',
            },
          },
          label: 'Documento',
          conditions: [['toggle_senza_doc', '==', false]],
        },
        divider_1: {
          type: 'static',
          tag: 'hr',
        },
        crea: {
          type: 'button',
          full: true,
          size: 'lg',
          buttonLabel: 'Crea',
          submits: true,
        },
      },
    });

    return {
      ...form,
      vueform,
    };
  },
};
</script>

<style>
.vf-create-account *,
.vf-create-account *:before,
.vf-create-account *:after,
.vf-create-account:root {
  --vf-primary: #07bf9b;
  --vf-primary-darker: #06ac8b;
  --vf-color-on-primary: #ffffff;
  --vf-danger: #ef4444;
  --vf-danger-lighter: #fee2e2;
  --vf-success: #10b981;
  --vf-success-lighter: #d1fae5;
  --vf-gray-50: #f9fafb;
  --vf-gray-100: #f3f4f6;
  --vf-gray-200: #e5e7eb;
  --vf-gray-300: #d1d5db;
  --vf-gray-400: #9ca3af;
  --vf-gray-500: #6b7280;
  --vf-gray-600: #4b5563;
  --vf-gray-700: #374151;
  --vf-gray-800: #1f2937;
  --vf-gray-900: #111827;
  --vf-dark-50: #efefef;
  --vf-dark-100: #dcdcdc;
  --vf-dark-200: #bdbdbd;
  --vf-dark-300: #a0a0a0;
  --vf-dark-400: #848484;
  --vf-dark-500: #737373;
  --vf-dark-600: #393939;
  --vf-dark-700: #323232;
  --vf-dark-800: #262626;
  --vf-dark-900: #191919;
  --vf-ring-width: 2px;
  --vf-ring-color: #07bf9b66;
  --vf-link-color: var(--vf-primary);
  --vf-link-decoration: inherit;
  --vf-font-size: 1rem;
  --vf-font-size-sm: 0.875rem;
  --vf-font-size-lg: 1rem;
  --vf-font-size-small: 0.875rem;
  --vf-font-size-small-sm: 0.8125rem;
  --vf-font-size-small-lg: 0.875rem;
  --vf-font-size-h1: 2.125rem;
  --vf-font-size-h1-sm: 2.125rem;
  --vf-font-size-h1-lg: 2.125rem;
  --vf-font-size-h2: 1.875rem;
  --vf-font-size-h2-sm: 1.875rem;
  --vf-font-size-h2-lg: 1.875rem;
  --vf-font-size-h3: 1.5rem;
  --vf-font-size-h3-sm: 1.5rem;
  --vf-font-size-h3-lg: 1.5rem;
  --vf-font-size-h4: 1.25rem;
  --vf-font-size-h4-sm: 1.25rem;
  --vf-font-size-h4-lg: 1.25rem;
  --vf-font-size-h1-mobile: 1.5rem;
  --vf-font-size-h1-mobile-sm: 1.5rem;
  --vf-font-size-h1-mobile-lg: 1.5rem;
  --vf-font-size-h2-mobile: 1.25rem;
  --vf-font-size-h2-mobile-sm: 1.25rem;
  --vf-font-size-h2-mobile-lg: 1.25rem;
  --vf-font-size-h3-mobile: 1.125rem;
  --vf-font-size-h3-mobile-sm: 1.125rem;
  --vf-font-size-h3-mobile-lg: 1.125rem;
  --vf-font-size-h4-mobile: 1rem;
  --vf-font-size-h4-mobile-sm: 1rem;
  --vf-font-size-h4-mobile-lg: 1rem;
  --vf-font-size-blockquote: 1rem;
  --vf-font-size-blockquote-sm: 0.875rem;
  --vf-font-size-blockquote-lg: 1rem;
  --vf-line-height: 1.5rem;
  --vf-line-height-sm: 1.25rem;
  --vf-line-height-lg: 1.5rem;
  --vf-line-height-small: 1.25rem;
  --vf-line-height-small-sm: 1.125rem;
  --vf-line-height-small-lg: 1.25rem;
  --vf-line-height-headings: 1.2;
  --vf-line-height-headings-sm: 1.2;
  --vf-line-height-headings-lg: 1.2;
  --vf-line-height-blockquote: 1.5rem;
  --vf-line-height-blockquote-sm: 1.25rem;
  --vf-line-height-blockquote-lg: 1.5rem;
  --vf-letter-spacing: 0px;
  --vf-letter-spacing-sm: 0px;
  --vf-letter-spacing-lg: 0px;
  --vf-letter-spacing-small: 0px;
  --vf-letter-spacing-small-sm: 0px;
  --vf-letter-spacing-small-lg: 0px;
  --vf-letter-spacing-headings: 0px;
  --vf-letter-spacing-headings-sm: 0px;
  --vf-letter-spacing-headings-lg: 0px;
  --vf-letter-spacing-blockquote: 0px;
  --vf-letter-spacing-blockquote-sm: 0px;
  --vf-letter-spacing-blockquote-lg: 0px;
  --vf-gutter: 1rem;
  --vf-gutter-sm: 0.5rem;
  --vf-gutter-lg: 1rem;
  --vf-min-height-input: 2.375rem;
  --vf-min-height-input-sm: 2.125rem;
  --vf-min-height-input-lg: 2.875rem;
  --vf-py-input: 0.375rem;
  --vf-py-input-sm: 0.375rem;
  --vf-py-input-lg: 0.625rem;
  --vf-px-input: 0.75rem;
  --vf-px-input-sm: 0.5rem;
  --vf-px-input-lg: 0.875rem;
  --vf-py-btn: 0.375rem;
  --vf-py-btn-sm: 0.375rem;
  --vf-py-btn-lg: 0.625rem;
  --vf-px-btn: 0.875rem;
  --vf-px-btn-sm: 0.75rem;
  --vf-px-btn-lg: 1.25rem;
  --vf-py-btn-small: 0.25rem;
  --vf-py-btn-small-sm: 0.25rem;
  --vf-py-btn-small-lg: 0.375rem;
  --vf-px-btn-small: 0.625rem;
  --vf-px-btn-small-sm: 0.625rem;
  --vf-px-btn-small-lg: 0.75rem;
  --vf-py-group-tabs: 0.375rem;
  --vf-py-group-tabs-sm: 0.375rem;
  --vf-py-group-tabs-lg: 0.625rem;
  --vf-px-group-tabs: 0.75rem;
  --vf-px-group-tabs-sm: 0.5rem;
  --vf-px-group-tabs-lg: 0.875rem;
  --vf-py-group-blocks: 0.75rem;
  --vf-py-group-blocks-sm: 0.625rem;
  --vf-py-group-blocks-lg: 0.875rem;
  --vf-px-group-blocks: 1rem;
  --vf-px-group-blocks-sm: 1rem;
  --vf-px-group-blocks-lg: 1rem;
  --vf-py-tag: 0px;
  --vf-py-tag-sm: 0px;
  --vf-py-tag-lg: 0px;
  --vf-px-tag: 0.4375rem;
  --vf-px-tag-sm: 0.4375rem;
  --vf-px-tag-lg: 0.4375rem;
  --vf-py-slider-tooltip: 0.125rem;
  --vf-py-slider-tooltip-sm: 0.0625rem;
  --vf-py-slider-tooltip-lg: 0.1875rem;
  --vf-px-slider-tooltip: 0.375rem;
  --vf-px-slider-tooltip-sm: 0.3125rem;
  --vf-px-slider-tooltip-lg: 0.5rem;
  --vf-py-blockquote: 0.25rem;
  --vf-py-blockquote-sm: 0.25rem;
  --vf-py-blockquote-lg: 0.25rem;
  --vf-px-blockquote: 0.75rem;
  --vf-px-blockquote-sm: 0.75rem;
  --vf-px-blockquote-lg: 0.75rem;
  --vf-py-hr: 0.25rem;
  --vf-space-addon: 0px;
  --vf-space-addon-sm: 0px;
  --vf-space-addon-lg: 0px;
  --vf-space-checkbox: 0.375rem;
  --vf-space-checkbox-sm: 0.375rem;
  --vf-space-checkbox-lg: 0.375rem;
  --vf-space-tags: 0.1875rem;
  --vf-space-tags-sm: 0.1875rem;
  --vf-space-tags-lg: 0.1875rem;
  --vf-space-static-tag-1: 1rem;
  --vf-space-static-tag-2: 2rem;
  --vf-space-static-tag-3: 3rem;
  --vf-floating-top: 0rem;
  --vf-floating-top-sm: 0rem;
  --vf-floating-top-lg: 0.6875rem;
  --vf-bg-input: #ffffff;
  --vf-bg-input-hover: #ffffff;
  --vf-bg-input-focus: #ffffff;
  --vf-bg-input-danger: #ffffff;
  --vf-bg-input-success: #ffffff;
  --vf-bg-checkbox: #ffffff;
  --vf-bg-checkbox-hover: #ffffff;
  --vf-bg-checkbox-focus: #ffffff;
  --vf-bg-checkbox-danger: #ffffff;
  --vf-bg-checkbox-success: #ffffff;
  --vf-bg-disabled: var(--vf-gray-200);
  --vf-bg-selected: #1118270d;
  --vf-bg-passive: var(--vf-gray-300);
  --vf-bg-icon: var(--vf-gray-500);
  --vf-bg-danger: var(--vf-danger-lighter);
  --vf-bg-success: var(--vf-success-lighter);
  --vf-bg-tag: var(--vf-primary);
  --vf-bg-slider-handle: var(--vf-primary);
  --vf-bg-toggle-handle: #ffffff;
  --vf-bg-date-head: var(--vf-gray-100);
  --vf-bg-addon: #ffffff00;
  --vf-bg-btn: var(--vf-primary);
  --vf-bg-btn-danger: var(--vf-danger);
  --vf-bg-btn-secondary: var(--vf-gray-200);
  --vf-bg-table-header: var(--vf-gray-100);
  --vf-color-input: var(--vf-gray-800);
  --vf-color-input-hover: var(--vf-gray-800);
  --vf-color-input-focus: var(--vf-gray-800);
  --vf-color-input-danger: var(--vf-gray-800);
  --vf-color-input-success: var(--vf-gray-800);
  --vf-color-disabled: var(--vf-gray-400);
  --vf-color-placeholder: var(--vf-gray-300);
  --vf-color-passive: var(--vf-gray-700);
  --vf-color-muted: var(--vf-gray-500);
  --vf-color-floating: var(--vf-gray-500);
  --vf-color-floating-focus: var(--vf-gray-500);
  --vf-color-floating-success: var(--vf-gray-500);
  --vf-color-floating-danger: var(--vf-gray-500);
  --vf-color-danger: var(--vf-danger);
  --vf-color-success: var(--vf-success);
  --vf-color-tag: var(--vf-color-on-primary);
  --vf-color-addon: var(--vf-gray-800);
  --vf-color-date-head: var(--vf-gray-700);
  --vf-color-btn: var(--vf-color-on-primary);
  --vf-color-btn-danger: #ffffff;
  --vf-color-btn-secondary: var(--vf-gray-700);
  --vf-color-table-header: var(--vf-gray-800);
  --vf-border-color-input: var(--vf-gray-300);
  --vf-border-color-input-hover: var(--vf-gray-300);
  --vf-border-color-input-focus: var(--vf-primary);
  --vf-border-color-input-danger: var(--vf-gray-300);
  --vf-border-color-input-success: var(--vf-gray-300);
  --vf-border-color-checkbox: var(--vf-gray-300);
  --vf-border-color-checkbox-focus: var(--vf-primary);
  --vf-border-color-checkbox-hover: var(--vf-gray-300);
  --vf-border-color-checkbox-danger: var(--vf-gray-300);
  --vf-border-color-checkbox-success: var(--vf-gray-300);
  --vf-border-color-checked: var(--vf-primary);
  --vf-border-color-passive: var(--vf-gray-300);
  --vf-border-color-slider-tooltip: var(--vf-primary);
  --vf-border-color-tag: var(--vf-primary);
  --vf-border-color-btn: var(--vf-primary);
  --vf-border-color-btn-danger: var(--vf-danger);
  --vf-border-color-btn-secondary: var(--vf-gray-200);
  --vf-border-color-blockquote: var(--vf-gray-300);
  --vf-border-color-hr: var(--vf-gray-300);
  --vf-border-color-signature-hr: var(--vf-gray-300);
  --vf-border-color-table: var(--vf-gray-300);
  --vf-border-width-input-t: 1px;
  --vf-border-width-input-r: 1px;
  --vf-border-width-input-b: 1px;
  --vf-border-width-input-l: 1px;
  --vf-border-width-radio-t: 1px;
  --vf-border-width-radio-r: 1px;
  --vf-border-width-radio-b: 1px;
  --vf-border-width-radio-l: 1px;
  --vf-border-width-checkbox-t: 1px;
  --vf-border-width-checkbox-r: 1px;
  --vf-border-width-checkbox-b: 1px;
  --vf-border-width-checkbox-l: 1px;
  --vf-border-width-dropdown: 1px;
  --vf-border-width-btn: 1px;
  --vf-border-width-toggle: 0.125rem;
  --vf-border-width-tag: 1px;
  --vf-border-width-blockquote: 3px;
  --vf-border-width-table: 1px;
  --vf-shadow-input: 0px 0px 0px 0px rgba(0, 0, 0, 0);
  --vf-shadow-input-hover: 0px 0px 0px 0px rgba(0, 0, 0, 0);
  --vf-shadow-input-focus: 0px 0px 0px 0px rgba(0, 0, 0, 0);
  --vf-shadow-handles: 0px 0px 0px 0px rgba(0, 0, 0, 0);
  --vf-shadow-handles-hover: 0px 0px 0px 0px rgba(0, 0, 0, 0);
  --vf-shadow-handles-focus: 0px 0px 0px 0px rgba(0, 0, 0, 0);
  --vf-shadow-btn: 0px 0px 0px 0px rgba(0, 0, 0, 0);
  --vf-shadow-dropdown: 0px 0px 0px 0px rgba(0, 0, 0, 0);
  --vf-radius-input: 0.25rem;
  --vf-radius-input-sm: 0.25rem;
  --vf-radius-input-lg: 0.25rem;
  --vf-radius-btn: 0.25rem;
  --vf-radius-btn-sm: 0.25rem;
  --vf-radius-btn-lg: 0.25rem;
  --vf-radius-small: 0.25rem;
  --vf-radius-small-sm: 0.25rem;
  --vf-radius-small-lg: 0.25rem;
  --vf-radius-large: 0.25rem;
  --vf-radius-large-sm: 0.25rem;
  --vf-radius-large-lg: 0.25rem;
  --vf-radius-tag: 0.25rem;
  --vf-radius-tag-sm: 0.25rem;
  --vf-radius-tag-lg: 0.25rem;
  --vf-radius-checkbox: 0.25rem;
  --vf-radius-checkbox-sm: 0.25rem;
  --vf-radius-checkbox-lg: 0.25rem;
  --vf-radius-slider: 0.25rem;
  --vf-radius-slider-sm: 0.25rem;
  --vf-radius-slider-lg: 0.25rem;
  --vf-radius-image: 0.25rem;
  --vf-radius-image-sm: 0.25rem;
  --vf-radius-image-lg: 0.25rem;
  --vf-radius-gallery: 0.25rem;
  --vf-radius-gallery-sm: 0.25rem;
  --vf-radius-gallery-lg: 0.25rem;
  --vf-checkbox-size: 1rem;
  --vf-checkbox-size-sm: 0.875rem;
  --vf-checkbox-size-lg: 1rem;
  --vf-gallery-size: 6rem;
  --vf-gallery-size-sm: 5rem;
  --vf-gallery-size-lg: 7rem;
  --vf-toggle-width: 3rem;
  --vf-toggle-width-sm: 2.75rem;
  --vf-toggle-width-lg: 3rem;
  --vf-toggle-height: 1.25rem;
  --vf-toggle-height-sm: 1rem;
  --vf-toggle-height-lg: 1.25rem;
  --vf-slider-height: 0.375rem;
  --vf-slider-height-sm: 0.3125rem;
  --vf-slider-height-lg: 0.5rem;
  --vf-slider-height-vertical: 20rem;
  --vf-slider-height-vertical-sm: 20rem;
  --vf-slider-height-vertical-lg: 20rem;
  --vf-slider-handle-size: 1rem;
  --vf-slider-handle-size-sm: 0.875rem;
  --vf-slider-handle-size-lg: 1.25rem;
  --vf-slider-tooltip-distance: 0.5rem;
  --vf-slider-tooltip-distance-sm: 0.375rem;
  --vf-slider-tooltip-distance-lg: 0.5rem;
  --vf-slider-tooltip-arrow-size: 0.3125rem;
  --vf-slider-tooltip-arrow-size-sm: 0.3125rem;
  --vf-slider-tooltip-arrow-size-lg: 0.3125rem;
}
</style>
